import { format, sub, differenceInMinutes } from 'date-fns';
import { CustomDate, time } from '@/types';

export const timeHandler = (start: Date, end: Date): number => {
  return differenceInMinutes(start, end);
};

export const formatTime = (eventDate: CustomDate, minutes: number) => {
  const convertedMinutes = minutesToTime(minutes);

  return format(
    sub(eventDate.date, {
      hours: convertedMinutes.hours,
      minutes: convertedMinutes.minutes,
    }),
    'HH:mm',
  );
};

export const splitTime = (time: string): time => {
  const splittedTime = time.split(':');
  return {
    hours: Number(splittedTime[0]),
    minutes: Number(splittedTime[1]),
    seconds: Number(splittedTime[2]),
  };
};

export const minutesToTime = (minutes: number): time => {
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60,
  };
};
