import { Injectable, NotFoundException } from '@nestjs/common';
import { CarEntity } from '../../../domain/entities/car.entity';
import { CarRepository } from '../../../domain/repositories/car-repository';

import { UseCase } from '../useCases';

@Injectable()
export class GetCarByIdUseCase
  implements UseCase<HTTPRequestObject, CarEntity>
{
  constructor(private readonly carRepository: CarRepository) {}
  async execute({ id }: HTTPRequestObject): Promise<CarEntity> {
    const findCar = await this.carRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException(`ID ${id} not found`);
    }
    return findCar;
  }
}
