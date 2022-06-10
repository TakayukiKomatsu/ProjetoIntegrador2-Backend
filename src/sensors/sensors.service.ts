import { Injectable } from '@nestjs/common';
@Injectable()
export class SensorsService {
  create(createSensorDto) {
    return 'This action adds a new sensor';
  }

  findAll() {
    return `This action returns all sensors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sensor`;
  }

  update(id: number, updateSensorDto) {
    return `This action updates a #${id} sensor`;
  }

  remove(id: number) {
    return `This action removes a #${id} sensor`;
  }
}
