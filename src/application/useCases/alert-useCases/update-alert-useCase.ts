import { Injectable, NotFoundException  } from '@nestjs/common';
import { AlertEntity } from 'src/domain/entities/alert.entity';
import { AlertRepository } from '../../../domain/repositories/alert-repository';
import { UseCase } from '../useCases';

@Injectable()
export class UpdateAlertUseCase
  implements UseCase<HTTPRequestObject, AlertEntity>
{
  constructor(private readonly alertRepository: AlertRepository) {}

  async execute(data: HTTPRequestObject): Promise<AlertEntity> {
    const { id, updateAlert } = data;
    const findAlert = await this.alertRepository.findOne(id);

    if (!findAlert) {
      throw new NotFoundException(`ID ${id} not found`);
    }

    const updated = await this.alertRepository.update(id, updateAlert);
    return updated;
  }
}