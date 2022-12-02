import axios from 'axios';
import { isPast, isEqual, sub, isSameHour } from 'date-fns';
import { ForecastValue, GetTemperatureInterface } from '@/types';

// tempo necessário para abaixar 1 C
const TIMExTEMPERATURE = 12;

export const getTemperature = async (
  city_id = 3477,
): Promise<GetTemperatureInterface> => {
  const { data } = await axios.get(
    `http://apiadvisor.climatempo.com.br/api/v2/forecast/temperature/locale/${city_id}/hours/168?token=${process.env.CLIMA_TEMPO_TOKEN}`,
  );
  const temperatures = await data?.temperatures;
  return {
    temperatures,
  };
};

export const findTemperature = async (
  eventDate: Date,
  temperatureList: ForecastValue[],
) => {
  if (isPast(eventDate)) throw new Error('A data do evento já passou.');

  const filteredDate = temperatureList.find((element) =>
    isSameHour(new Date(element.date), eventDate),
  );

  return filteredDate;
};

export const timeToReachTemperature = (
  startDate: Date,
  desiredTemperature: number,
  actualTemperature: number,
) => {
  const minutes = Math.ceil(
    Math.abs(desiredTemperature - actualTemperature) * TIMExTEMPERATURE,
  );

  return sub(startDate, { minutes });
};
