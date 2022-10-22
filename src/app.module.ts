import { Module } from '@nestjs/common';
import { EventsModule } from './module/events/events.module';
import { RoomModule } from './module/rooms/rooms.module';
import { SensorsModule } from './module/sensors/sensors.module';
import { PrismaService } from './prisma/prisma.service';
import { SensorDataModule } from './module/sensor-data/sensor-data.module';

@Module({
  imports: [EventsModule, RoomModule, SensorsModule, SensorDataModule],
  providers: [PrismaService],
})
export class AppModule {}
