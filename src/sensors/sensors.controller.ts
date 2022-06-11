import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { Prisma, Sensor } from '@prisma/client';
import { ApiTags, ApiQuery, ApiBody, ApiParam } from '@nestjs/swagger';

@ApiTags('Sensores')
@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Get()
  findAll(): Promise<Sensor[] | null> {
    return this.sensorsService.findAll();
  }

  @Post()
  @ApiBody({ description: 'Dados do sensor', required: true, type: Object })
  create(@Body() data: Prisma.SensorCreateInput): Promise<Sensor | null> {
    return this.sensorsService.create(data);
  }

  @Get('/room')
  @ApiQuery({ name: 'roomId', required: true })
  findByRoom(
    @Query('roomId') roomId: Prisma.RoomWhereUniqueInput,
  ): Promise<Sensor[] | null> {
    return this.sensorsService.findByRoom(roomId);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Id do sensor', type: Number })
  findOne(
    @Param('id') id: Prisma.SensorWhereUniqueInput,
  ): Promise<Sensor | null> {
    return this.sensorsService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'Id do sensor', type: Number })
  @ApiBody({ description: 'Dados do sensor', required: true, type: Object })
  update(
    @Param('id') id: Prisma.SensorWhereUniqueInput,
    @Body() data: Prisma.SensorCreateInput,
  ) {
    return this.sensorsService.update(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Id do sensor', type: Number })
  remove(@Param('id') id: Prisma.SensorWhereUniqueInput): Promise<Sensor> {
    return this.sensorsService.remove(id);
  }
}
