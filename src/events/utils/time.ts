import { format, sub } from 'date-fns';
import { CustomDate, time } from '../types';

export const timeHandler = (day: string, time: string): CustomDate => {
  const date = new Date(`${day}T${time}`);
  return {
    date: date,
    day: format(date, 'yyyy-LL-dd'),
    time: format(date, 'HH:mm'),
    weatherApi: format(date, 'yyyy-LL-dd HH:00'),
  };
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

const splitTime = (time: string): time => {
  const splittedTime = time.split(':');
  return {
    hours: Number(splittedTime[0]),
    minutes: Number(splittedTime[1]),
    seconds: Number(splittedTime[2]),
  };
};

const minutesToTime = (minutes: number): time => {
  return {
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60,
  };
};
