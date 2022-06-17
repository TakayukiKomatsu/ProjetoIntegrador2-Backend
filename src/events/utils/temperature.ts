import axios from 'axios';
import { GetTemperatureInterface } from '../types';

// tempo necessário para abaixar 1 C
const TIMExTEMPERATURE = 12;

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

export const temperatureHandler = (
  idealTemperature: number,
  actualTemperature: number,
) => {
  const temperature = Math.abs(idealTemperature - actualTemperature);
  return temperature * TIMExTEMPERATURE;
};
