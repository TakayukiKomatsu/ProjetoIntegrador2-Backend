import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Subscribe, Payload, Params, Topic } from 'nest-mqtt';

type sensorData = [string, number];

@Injectable()
export class MqttService {
  constructor(private prisma: PrismaService) {}

  @Subscribe('sensors/+/temperature/+')
  async sensor(
    @Payload() payload,
    @Params() param: sensorData,
    @Topic() topic: string,
  ) {
    console.log('🚀 ~ file: mqtt.service.ts:17 ~ MqttService ~ topic', topic);
    console.log(`param: ${param} | payload: ${payload}`);

    if (!payload) return null;

    return await this.prisma.sensorData.create({
      data: {
        time: new Date(),
        topic: param[0],
        value: payload,
        sensorId: Number(param[1]),
      },
    });
  }
}
