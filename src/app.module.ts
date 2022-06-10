import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EventsModule } from './events/events.module';
import { RoomModule } from './rooms/rooms.module';
import { SensorsModule } from './sensors/sensors.module';

@Module({
  imports: [EventsModule, RoomModule, SensorsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
