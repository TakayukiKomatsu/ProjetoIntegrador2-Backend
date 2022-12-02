import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, SensorData } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class SensorDataService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<SensorData[] | null> {
    try {
      return this.prisma.sensorData.findMany();
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }

  async findOne(
    sensorId: Prisma.SensorDataWhereUniqueInput,
  ): Promise<SensorData[] | null> {
    try {
      return this.prisma.sensorData.findMany({
        where: {
          sensorId: Number(sensorId),
        },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }
}
