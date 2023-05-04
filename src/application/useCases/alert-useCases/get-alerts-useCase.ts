import { Injectable } from '@nestjs/common';
import { AlertEntity } from 'src/domain/entities/alert.entity';
import { AlertRepository } from '../../../domain/repositories/alert-repository';
import { UseCase } from '../useCases';

@Injectable()
export class GetAlertsUseCase
  implements UseCase<HTTPRequestObject, AlertEntity[]>
{
  constructor(private readonly alertRepository: AlertRepository) {}

  async execute(): Promise<AlertEntity[]> {
    const alerts = await this.alertRepository.findAll();

    return alerts;
  }
}