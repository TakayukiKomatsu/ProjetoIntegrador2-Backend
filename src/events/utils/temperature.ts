import axios from 'axios';
import { Prisma } from '@prisma/client';
import { CustomDate, GetTemperatureInterface } from '../types';
import { formatTime, timeHandler } from './time';
import { Forecast, ForecastDay } from '../types';
import { isPast } from 'date-fns';

// tempo necessário para abaixar 1 C
const TIMExTEMPERATURE = 12;

export const temperatureHandler = async ({
  tempDesejada,
  diaEvent,
  horaInicio,
}: Prisma.EventCreateInput) => {
  const eventDate = timeHandler(diaEvent, horaInicio);
  const temperature = await findTemperature(eventDate);
  const time = timeToReachTemperature(eventDate, tempDesejada, temperature);
  return {
    temperature,
    time,
  };
};

const findTemperature = async (eventDate: CustomDate) => {
  const { forecast } = await getTemperature();
  let outsideTemperature: number = null;
  forecast.map(({ date, hour }: Forecast) => {
    if (isPast(eventDate.date)) throw new Error('A data do evento já passou.');

    if (date === eventDate.day) {
      hour.map((forecastDay: ForecastDay) => {
        if (forecastDay.time === eventDate.weatherApi) {
          outsideTemperature = forecastDay.temp_c;
        }
      });
    }
  });
  if (outsideTemperature === null)
    throw new Error('Não foi possivel encontrar uma temperatura para o evento');

  return outsideTemperature;
};

const timeToReachTemperature = (
  eventDate: CustomDate,
  idealTemperature: number,
  actualTemperature: number,
) => {
  const minutes = Math.ceil(
    Math.abs(idealTemperature - actualTemperature) * TIMExTEMPERATURE,
  );

  return formatTime(eventDate, minutes);
};

export const getTemperature = async (
  location = 'Sao_Paulo',
  totalOfDays = 10,
): Promise<GetTemperatureInterface> => {
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=${totalOfDays}&aqi=no&alerts=no`,
  );

  const currentTemperature = await data?.current?.temp_c;
  const forecast = await data?.forecast?.forecastday;
  return {
    currentTemperature,
    forecast,
  };
};
