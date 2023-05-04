import { Injectable } from '@nestjs/common';
import { CarEntity } from '../../../domain/entities/car.entity';
import { CarRepository } from '../../../domain/repositories/car-repository';

import { UseCase } from '../useCases';

@Injectable()
export class GetCarsUseCase implements UseCase<any, CarEntity[]> {
  constructor(private readonly carRepository: CarRepository) {}

  async execute(): Promise<CarEntity[]> {
    const cars = await this.carRepository.findAll();

    return cars;
  }
}
