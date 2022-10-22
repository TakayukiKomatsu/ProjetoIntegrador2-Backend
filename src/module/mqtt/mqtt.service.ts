import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Subscribe, Payload, Params } from 'nest-mqtt';

type sensorData = [string, number];

@Injectable()
export class MqttService {
  constructor(private prisma: PrismaService) {}

  @Subscribe('sensors/+/temperature/+')
  async sensor(@Payload() payload, @Params() param: sensorData) {
    console.log(`param: ${param} | payload: ${payload}`);

    if (!payload) return null;

    return await this.prisma.sensorData.create({
      data: {
        time: new Date(),
        topic: param[0],
        value: payload,
        sensor: {
          connect: {
            id: Number(param[1]),
          },
        },
      },
    });
  }
}
