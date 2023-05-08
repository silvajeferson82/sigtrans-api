import { ConflictException, Injectable } from '@nestjs/common';
import { convertUpperCase } from '../../../infra/http/helpers/convert.helper';
import { CarEntity } from '../../../domain/entities/car.entity';
import { CarRepository } from '../../../domain/repositories/car-repository';
import { UseCase } from '../useCases';

@Injectable()
export class CreateCarUseCase implements UseCase<IRequestCar, CarEntity> {
  constructor(private readonly carRepository: CarRepository) {}

  async execute(data: IRequestCar): Promise<CarEntity> {
    data.placa = convertUpperCase(data.placa);
    data.chassi = convertUpperCase(data.chassi);
    try {
      const created = await this.carRepository.create(data);

      return created;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
    }
  }
}
