import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RoomService } from './rooms.service';
import { Prisma, Room } from '@prisma/client';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  create(@Body() createRoomDto: Prisma.RoomCreateInput) {
    return this.roomService.create(createRoomDto);
  }

  @Get()
  findAll(): Promise<Room[] | null> {
    return this.roomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Prisma.RoomWhereUniqueInput) {
    return this.roomService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: Prisma.RoomWhereUniqueInput,
    @Body() data: Prisma.RoomUpdateInput,
  ) {
    return this.roomService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.RoomWhereUniqueInput) {
    return this.roomService.remove(id);
  }
}
