import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SensorDataService } from './sensorData.service';
import { Prisma, SensorData } from '@prisma/client';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('sensorData')
@Controller('sensorData')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @Get()
  async findAll() {
    return await this.sensorDataService.findAll();
  }

  @Get('filter')
  @ApiQuery({
    name: 'type',
    description: 'Tipo do sensor',
    required: true,
    enum: ['manual', 'automatic'],
  })
  @ApiQuery({
    name: 'topic',
    description: 'Tópico do sensor - MQTT',
    required: false,
    type: String,
  })
  async findAllManual(
    @Query('type') type: 'manual' | 'automatic',
    @Query('topic') topic: string,
  ): Promise<SensorData[] | null> {
    return await this.sensorDataService.findByType(type, topic);
  }

  @Post()
  @ApiBody({ description: 'Dados do sensor', required: true, type: Object })
  async createRow(
    @Body() data: Prisma.SensorDataCreateInput,
  ): Promise<SensorData | null> {
    return await this.sensorDataService.create(data);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Id do sensor', required: true })
  async findOne(
    @Param('id') id: Prisma.SensorDataWhereUniqueInput,
  ): Promise<SensorData[] | null> {
    return await this.sensorDataService.findOne(id);
  }
}
