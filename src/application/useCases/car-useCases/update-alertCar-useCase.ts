import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AlertCarRepository } from '../../../domain/repositories/alertCar-repository';
import { UseCase } from '../useCases';
import { AlertCarEntity } from '../../../domain/entities/alert-car.entity';
import { StateGateway } from '../../gateway/state.gateway';

@Injectable()
export class UpdateAlertCarUseCase
  implements UseCase<HTTPRequestObject, AlertCarEntity>
{
  constructor(
    private readonly alertCarRepository: AlertCarRepository,
    private readonly gateway: StateGateway,
  ) { }

  async execute(data: HTTPRequestObject): Promise<AlertCarEntity> {
    const id = data.id;
    const update = data['updateAlertCarDto'];
    try {
      const result = await this.alertCarRepository.update(id, update);
      const alert = {
        placa: result.veiculo.placa,
        chassi: result.veiculo.chassi,
        marca: result.veiculo.marca,
        modelo: result.veiculo.modelo,
        alerta: {
          nome: result.alerta.nome,
          descricao: result.alerta.descricao,
          lista: result.alerta.tipo,
        },
      };

      this.gateway.onAlert(alert);

      return result;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      if (error instanceof ConflictException) {
        throw error;
      }
    }
  }
}
