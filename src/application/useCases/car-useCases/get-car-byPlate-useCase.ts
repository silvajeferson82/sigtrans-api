import { Injectable, NotFoundException } from '@nestjs/common';
import { CarEntity } from 'src/application/entities/car.entity';
import { CarRepository } from '../../repositories/car-repository';
import { UseCase } from '../useCases';

@Injectable()
export class GetCarByPlateUseCase
  implements UseCase<HTTPRequestObject, CarEntity>
{
  constructor(private readonly carRepository: CarRepository) {}
  async execute({ placa }: HTTPRequestObject): Promise<CarEntity> {
    const findCar = await this.carRepository.findByPlate(placa);

    if (!findCar) {
      throw new NotFoundException(`PLACA ${placa} not found`);
    }
    return findCar;
  }
}