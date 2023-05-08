import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { AlertCarRepository } from '../../../domain/repositories/alertCar-repository';
import { UseCase } from '../useCases';
import { AlertCarEntity } from '../../../domain/entities/alert-car.entity';
import { StateGateway } from '../../../application/gateway/state.gateway';

@Injectable()
export class CreateAlertCarUseCase
  implements UseCase<IRequestAlertCar, AlertCarEntity>
{
  constructor(
    private readonly alertCarRepository: AlertCarRepository,
    @Inject(StateGateway) private readonly gateway: StateGateway,
  ) { }

  async execute(data: IRequestAlertCar): Promise<AlertCarEntity> {
    try {
      const result = await this.alertCarRepository.create(data);

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
      if (error instanceof ConflictException) {
        throw error;
      }
    }
  }
}
