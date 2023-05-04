import { Injectable } from '@nestjs/common';
import { AlertEntity } from 'src/domain/entities/alert.entity';
import { AlertRepository } from 'src/domain/repositories/alert-repository';
import { UseCase } from '../useCases';

@Injectable()
export class CreateAlertUseCase implements UseCase<IRequestAlert, AlertEntity> {
  constructor(private readonly alertRepository: AlertRepository) {}

  async execute(data: IRequestAlert): Promise<AlertEntity> {
    const created = await this.alertRepository.create(data);
    return created;
  }
}