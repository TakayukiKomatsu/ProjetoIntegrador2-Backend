export interface GetTemperatureInterface {
  currentTemperature: CurrentTemperature;
  forecast: Forecast[];
}

export type CurrentTemperature = number;

export interface Forecast {
  date: Date;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: any;
  };
  astro: any;
  hour: ForecastDay[];
}

export interface ForecastDay {
  time_epoch: number;
  time: string;
  temp_c: number;
}

export interface time {
  hours?: number;
  minutes?: number;
  seconds?: number;
}
