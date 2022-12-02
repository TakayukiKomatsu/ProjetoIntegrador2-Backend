import { Controller, Get, Param } from '@nestjs/common';
import { SensorDataService } from './sensorData.service';
import { Prisma, SensorData } from '@prisma/client';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('sensorData')
@Controller('sensorData')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @Get()
  async findAll() {
    return await this.sensorDataService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Id do sensor', required: true })
  async findOne(
    @Param('id') id: Prisma.SensorDataWhereUniqueInput,
  ): Promise<SensorData[] | null> {
    return await this.sensorDataService.findOne(id);
  }
}
