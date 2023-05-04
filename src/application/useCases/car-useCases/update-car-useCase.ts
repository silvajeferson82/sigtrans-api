import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CarEntity } from '../../../domain/entities/car.entity';
import { CarRepository } from '../../../domain/repositories/car-repository';

import { UseCase } from '../useCases';

@Injectable()
export class UpdateCarUseCase implements UseCase<HTTPRequestObject, CarEntity> {
  constructor(private readonly carRepository: CarRepository) {}
  async execute(data: HTTPRequestObject): Promise<CarEntity> {
    const id = data.id;
    const update = data['updateCarDto'];
    const findCar = await this.carRepository.findOne(id);
    if (!findCar) {
      throw new NotFoundException(`ID ${id} not found`);
    }

    if (!!update.placa) {
      update.placa = update.placa.toUpperCase();
    }

    if (!!update.chassi) {
      update.chassi = update.chassi.toUpperCase();
    }
    try {
      const updated = await this.carRepository.update(id, update);
      return updated;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
    }
  }
}
