import { Injectable, NotFoundException  } from '@nestjs/common';
import { AlertEntity } from 'src/domain/entities/alert.entity';
import { AlertRepository } from '../../../domain/repositories/alert-repository';
import { UseCase } from '../useCases';

@Injectable()
export class GetAlertByIdUseCase
  implements UseCase<HTTPRequestObject, AlertEntity>
{
  constructor(private readonly alertRepository: AlertRepository) {}

  async execute({ id }: HTTPRequestObject): Promise<AlertEntity> {
    const findAlert = await this.alertRepository.findOne(id);

    if (!findAlert) {
      throw new NotFoundException(`ID ${id} not found`);
    }
    return findAlert;
  }
}