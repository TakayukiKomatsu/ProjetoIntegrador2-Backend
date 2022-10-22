import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

import { Prisma, Sensor } from '@prisma/client';

@Injectable()
export class SensorsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: Prisma.SensorCreateInput): Promise<Sensor | null> {
    try {
      return await this.prisma.sensor.create({ data });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  findAll(): Promise<Sensor[] | null> {
    try {
      return this.prisma.sensor.findMany();
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  findByRoom(id: Prisma.RoomWhereUniqueInput): Promise<Sensor[]> {
    try {
      return this.prisma.sensor.findMany({ where: { roomId: Number(id) } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  findOne(id: Prisma.SensorWhereUniqueInput): Promise<Sensor | null> {
    try {
      return this.prisma.sensor.findUnique({ where: { id: Number(id) } });
    } catch (error) {
      console.log(error);
    }
  }

  update(
    id: Prisma.SensorWhereUniqueInput,
    data: Prisma.SensorUpdateInput,
  ): Promise<Sensor | null> {
    try {
      return this.prisma.sensor.update({ where: { id: Number(id) }, data });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  remove(id: Prisma.SensorWhereUniqueInput): Promise<Sensor | null> {
    try {
      return this.prisma.sensor.delete({ where: { id: Number(id) } });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
