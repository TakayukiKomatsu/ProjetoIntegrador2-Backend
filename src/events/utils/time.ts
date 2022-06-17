import { add } from 'date-fns';
import { time } from '../types';

export const timeHandler = (date: string, eventTime: string): Date => {
  const localDate = new Date(date);
  const time = timeSplitter(eventTime);
  return add(localDate, {
    hours: time?.hours,
    minutes: time?.minutes,
    seconds: time?.seconds,
  });
};

/*Metodo responsável por realizar o split do tempo utilizando o divisor : */
export const timeSplitter = (time: string): time => {
  const splittedTime = time.split(':');
  return {
    hours: Number(splittedTime[0]),
    minutes: Number(splittedTime[1]),
    seconds: Number(splittedTime[2]),
  };
};
