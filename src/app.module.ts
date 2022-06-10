import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EventsModule } from './events/events.module';
import { RoomModule } from './rooms/rooms.module';

@Module({
  imports: [EventsModule, RoomModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
