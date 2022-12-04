import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { parseISO } from 'date-fns';

import {
  getTemperature,
  findTemperature,
  timeToReachTemperature,
  formatTime,
} from '../shared';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(payload: Prisma.EventCreateInput): Promise<Event> {
    try {
      const data = {
        startDate: formatTime(payload.startDate as string),
        endDate: formatTime(payload.startDate as string),
        ...payload,
      };
      const temperatureList = await (await getTemperature()).temperatures;
      const selectedTemperature = await findTemperature(
        parseISO(data.startDate as string),
        temperatureList,
      );

      const acTime = timeToReachTemperature(
        parseISO(data.startDate as string),
        data.desiredTemperature,
        selectedTemperature.value,
      );

      return await this.prisma.event.create({
        data: {
          startDate: parseISO(data.startDate as string),
          endDate: parseISO(data.endDate as string),
          ACTime: acTime.toISOString(),
          ...data,
        },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException('Não foi possível cadastrar o evento.');
    }
  }

  async findAll(): Promise<Event[] | null> {
    try {
      return this.prisma.event.findMany();
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }

  async findOne(eventId: Prisma.EventWhereUniqueInput): Promise<Event | null> {
    try {
      return this.prisma.event.findUnique({
        where: { id: Number(eventId) },
        rejectOnNotFound: true,
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }

  async update(
    id: Prisma.EventWhereUniqueInput,
    data: Prisma.EventUpdateInput,
  ) {
    try {
      return this.prisma.event.update({
        data,
        where: { id: Number(id) },
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async remove(id: Prisma.EventWhereUniqueInput): Promise<Event> {
    try {
      return this.prisma.event.delete({ where: { id: Number(id) } });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }
}
