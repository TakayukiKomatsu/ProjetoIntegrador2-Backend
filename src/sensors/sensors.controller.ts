import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { Prisma, Sensor } from '@prisma/client';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Post()
  create(@Body() data: Prisma.SensorCreateInput): Promise<Sensor | null> {
    return this.sensorsService.create(data);
  }

  @Get()
  findAll(): Promise<Sensor[] | null> {
    return this.sensorsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: Prisma.SensorWhereUniqueInput,
  ): Promise<Sensor | null> {
    return this.sensorsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: Prisma.SensorWhereUniqueInput,
    @Body() data: Prisma.SensorCreateInput,
  ) {
    return this.sensorsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.SensorWhereUniqueInput): Promise<Sensor> {
    return this.sensorsService.remove(id);
  }
}
