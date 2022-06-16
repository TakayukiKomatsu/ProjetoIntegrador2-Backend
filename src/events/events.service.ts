import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { lastValueFrom, map } from 'rxjs';
import { PrismaService } from '../prisma/prisma.service';
import { GetTemperatureInterface } from './types';

// tempo necessário para abaixar 1 C
const TIMExTEMPERATURE = 12;

@Injectable()
export class EventsService {
  constructor(
    private prisma: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async create(data: Prisma.EventCreateInput): Promise<Event> {
    try {
      return await this.prisma.event.create({ data });
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
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

  async getTemperature(
    location = 'Sao_Paulo',
    totalOfDays = 10,
  ): Promise<GetTemperatureInterface> {
    const data = await lastValueFrom(
      this.httpService
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=${totalOfDays}&aqi=no&alerts=no`,
        )
        .pipe(map((resp) => resp.data)),
    );

    const currentTemperature = await data?.current?.temp_c;
    const forecast = await data?.forecast?.forecastday;
    return {
      currentTemperature,
      forecast,
    };
  }
}
