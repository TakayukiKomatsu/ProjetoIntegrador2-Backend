import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Room, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.RoomCreateInput) {
    try {
      return this.prisma.room.create({ data });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async findAll(): Promise<Room[] | null> {
    try {
      return this.prisma.room.findMany();
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  async findOne(where: Prisma.RoomWhereUniqueInput): Promise<Room | null> {
    try {
      return this.prisma.room.findUnique({ where });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  async update(
    where: Prisma.RoomWhereUniqueInput,
    data: Prisma.RoomUpdateInput,
  ) {
    try {
      return this.prisma.room.update({ where, data });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  async remove(id: Prisma.RoomWhereUniqueInput) {
    try {
      return this.prisma.room.delete({ where: { id: Number(id) } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }
}