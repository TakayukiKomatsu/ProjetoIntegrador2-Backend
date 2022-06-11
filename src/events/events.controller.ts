import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Event, Prisma } from '@prisma/client';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Eventos')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll() {
    return await this.eventsService.findAll();
  }

  @Post()
  @ApiBody({ description: 'Dados do evento', required: true, type: Object })
  async create(@Body() data: Prisma.EventCreateInput): Promise<Event | null> {
    return await this.eventsService.create(data);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Id do evento', required: true })
  async findOne(
    @Param('id') id: Prisma.EventWhereUniqueInput,
  ): Promise<Event | null> {
    return await this.eventsService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'Id do evento', required: true })
  @ApiBody({ description: 'Dados do evento', required: true, type: Object })
  async update(
    @Body() data: Prisma.EventUpdateInput,
    @Param('id') id: Prisma.EventWhereUniqueInput,
  ): Promise<Event | null> {
    return await this.eventsService.update(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Id do evento', required: true })
  async remove(@Param('id') id: Prisma.EventWhereUniqueInput) {
    return await this.eventsService.remove(id);
  }
}
