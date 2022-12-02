import { Module } from '@nestjs/common';
import { SensorDataController } from './sensorData.controller';
import { SensorDataService } from './sensorData.service';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [SensorDataController],
  providers: [SensorDataService, PrismaService],
})
export class SensorDataModule {}
