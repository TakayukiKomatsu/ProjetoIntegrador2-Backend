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
      return await this.prisma.room.create({ data });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async findAll(): Promise<Room[] | null> {
    try {
      return await this.prisma.room.findMany();
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  async findWithAllData(): Promise<Room[] | null> {
    try {
      return await this.prisma.room.findMany({
        include: {
          Event: true,
          Sensor: true,
        },
      });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  async findOne(id: Prisma.RoomWhereUniqueInput): Promise<Room | null> {
    try {
      return await this.prisma.room.findUnique({
        where: { id: Number(id) },
        rejectOnNotFound: true,
      });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  async update(id: Prisma.RoomWhereUniqueInput, data: Prisma.RoomUpdateInput) {
    try {
      return await this.prisma.room.update({
        where: { id: Number(id) },
        data,
      });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }

  async remove(id: Prisma.RoomWhereUniqueInput) {
    try {
      return await this.prisma.room.delete({ where: { id: Number(id) } });
    } catch (error) {
      console.log(error);
      throw new NotFoundException(error);
    }
  }
}
