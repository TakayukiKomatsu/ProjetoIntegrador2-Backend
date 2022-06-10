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

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() data: Prisma.EventCreateInput): Promise<Event | null> {
    return this.eventsService.create(data);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: Prisma.EventWhereUniqueInput,
  ): Promise<Event | null> {
    return this.eventsService.findOne(id);
  }

  @Put(':id')
  update(
    @Body() data: Prisma.EventUpdateInput,
    @Param('id') id: Prisma.EventWhereUniqueInput,
  ): Promise<Event | null> {
    return this.eventsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.EventWhereUniqueInput) {
    return this.eventsService.remove(id);
  }
}
