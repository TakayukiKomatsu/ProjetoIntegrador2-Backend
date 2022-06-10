import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
