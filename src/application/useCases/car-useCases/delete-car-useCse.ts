import { Injectable, NotFoundException } from '@nestjs/common';
import { CarEntity } from 'src/application/entities/car.entity';
import { CarRepository } from '../../repositories/car-repository';
import { UseCase } from '../useCases';

@Injectable()
export class DeleteCarUseCase implements UseCase<HTTPRequestObject, CarEntity> {
  constructor(private readonly carRepository: CarRepository) {}
  async execute({ id }: HTTPRequestObject): Promise<CarEntity> {
    const findCar = await this.carRepository.findOne(id);

    if (!findCar) {
      throw new NotFoundException(`ID ${id} not found`);
    }
    const deleted = await this.carRepository.remove(id);
    return deleted;
  }
}
