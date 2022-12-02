export interface GetTemperatureInterface {
  temperatures: ForecastValue[];
}

export type CurrentTemperature = number;

export interface Forecast {
  id: number;
  name: string;
  state: string;
  country: string;
  temperatures: ForecastValue[];
}

export interface ForecastValue {
  date: Date;
  value: number;
}
