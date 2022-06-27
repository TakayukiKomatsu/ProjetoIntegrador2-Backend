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
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Salas')
@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async findAll(): Promise<Room[] | null> {
    return await this.roomService.findAll();
  }

  @Post()
  @ApiBody({ description: 'Dados da sala', required: true, type: Object })
  async create(@Body() createRoomDto: Prisma.RoomCreateInput) {
    return await this.roomService.create(createRoomDto);
  }

  @Get()
  async findAllDescriptions(): Promise<Room[] | null> {
    return await this.roomService.findAllDescriptions();
  }

  @Get('/allData')
  async findWithAllData(): Promise<Room[] | null> {
    return await this.roomService.findWithAllData();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Id da sala', type: Number })
  async findOne(@Param('id') id: Prisma.RoomWhereUniqueInput) {
    return await this.roomService.findOne(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'Id da sala', type: Number })
  @ApiBody({ description: 'Dados da sala', required: true, type: Object })
  async update(
    @Param('id') id: Prisma.RoomWhereUniqueInput,
    @Body() data: Prisma.RoomUpdateInput,
  ) {
    return await this.roomService.update(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Id da sala', type: Number })
  async remove(@Param('id') id: Prisma.RoomWhereUniqueInput) {
    return await this.roomService.remove(id);
  }
}
