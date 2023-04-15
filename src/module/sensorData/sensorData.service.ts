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

  async create(data: Prisma.SensorDataCreateInput): Promise<SensorData | null> {
    try {
      return await this.prisma.sensorData.create({
        data,
      });
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

  async findByType(
    type: 'manual' | 'automatic',
    topic?: string,
  ): Promise<SensorData[] | null> {
    try {
      const filteredSensor = await this.prisma.sensor.findMany({
        where: { type },
        select: { id: true },
      });

      if (!topic) {
        return await this.prisma.sensorData.findMany({
          where: {
            sensorId: { in: filteredSensor.map((sensor) => sensor.id) },
          },
        });
      }
      return await this.prisma.sensorData.findMany({
        where: {
          sensorId: { in: filteredSensor.map((sensor) => sensor.id) },
          topic: topic,
        },
        orderBy: {
          id: 'asc',
        },
      });
    } catch (error) {
      console.error(error);
      throw new NotFoundException(error);
    }
  }
}
