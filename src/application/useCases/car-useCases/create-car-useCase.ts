import { Injectable } from '@nestjs/common';
import { CarEntity } from 'src/application/entities/car.entity';
import { CarRepository } from '../../repositories/car-repository';
import { UseCase } from '../useCases';

@Injectable()
export class CreateCarUseCase implements UseCase<IRequestCar, CarEntity> {
  constructor(private readonly carRepository: CarRepository) {}

  async execute(create: IRequestCar): Promise<CarEntity> {
    const created = await this.carRepository.create(create);

    return created;
  }
}