import { Injectable } from '@nestjs/common';
import { CarRepository } from '../../repositories/car-repository';
import { UseCase } from '../useCases';

export interface CreateCarResponse {
  car: HTTPRequestObject['car'];
}

@Injectable()
export class CreateCarUseCase
  implements UseCase<HTTPRequestObject, CreateCarResponse>
{
  constructor(private readonly carRepository: CarRepository) {}

  async execute(
    request: HTTPRequestObject['car'],
  ): Promise<CreateCarResponse['car']> {
    const created = await this.carRepository.create(request);

    return created;
  }
}