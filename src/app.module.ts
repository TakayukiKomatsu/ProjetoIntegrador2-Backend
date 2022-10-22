import { Module } from '@nestjs/common';
import { MqttModule } from 'nest-mqtt';
import { EventsModule } from './module/events/events.module';
import { RoomModule } from './module/rooms/rooms.module';
import { SensorsModule } from './module/sensors/sensors.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { MqttService } from '@/module/mqtt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventsModule,
    RoomModule,
    SensorsModule,
    MqttModule.forRootAsync({
      useFactory: () => ({
        protocol: 'mqtts',
        port: Number(process.env.MQTT_PORT),
        host: process.env.MQTT_HOST,
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD,
      }),
    }),
  ],
  providers: [PrismaService, MqttService],
})
export class AppModule {}
