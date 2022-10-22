import { Module } from '@nestjs/common';
import { EventsModule } from './module/events/events.module';
import { RoomModule } from './module/rooms/rooms.module';
import { SensorsModule } from './module/sensors/sensors.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [EventsModule, RoomModule, SensorsModule],
  providers: [PrismaService],
})
export class AppModule {}
