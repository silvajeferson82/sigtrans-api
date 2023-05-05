import { ConflictException, Injectable } from '@nestjs/common';
import { AlertCarRepository } from '../../../domain/repositories/alertCar-repository';
import { UseCase } from '../useCases';
import { AlertCarEntity } from '../../../domain/entities/alert-car.entity';

@Injectable()
export class CreateAlertCarUseCase
  implements UseCase<IRequestAlertCar, AlertCarEntity>
{
  constructor(private readonly alertCarRepository: AlertCarRepository) {}

  async execute(data: IRequestAlertCar): Promise<AlertCarEntity> {
    try {
      const result = await this.alertCarRepository.create(data);
      return result;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
    }
  }
}
