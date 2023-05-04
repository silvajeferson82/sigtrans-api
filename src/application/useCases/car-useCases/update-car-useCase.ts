import { Injectable, NotFoundException } from '@nestjs/common';
import { CarEntity } from '../../../domain/entities/car.entity';
import { CarRepository } from '../../../domain/repositories/car-repository';

import { UseCase } from '../useCases';

@Injectable()
export class UpdateCarUseCase implements UseCase<HTTPRequestObject, CarEntity> {
  constructor(private readonly carRepository: CarRepository) {}
  async execute(data: HTTPRequestObject): Promise<CarEntity> {
    const { id, update } = data;
    const findCar = await this.carRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException(`ID ${id} not found`);
    }
    const updated = await this.carRepository.update(id, update);
    return updated;
  }
}
