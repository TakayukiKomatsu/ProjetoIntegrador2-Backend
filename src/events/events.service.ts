import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

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
      return this.prisma.event.findUnique({ where: { id: Number(eventId) } });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }

  async update(
    where: Prisma.EventWhereUniqueInput,
    data: Prisma.EventUpdateInput,
  ) {
    try {
      return this.prisma.event.update({
        data,
        where,
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async remove(where: Prisma.EventWhereUniqueInput): Promise<Event> {
    try {
      return this.prisma.event.delete({ where });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }
}
