import { ApiProperty } from '@nestjs/swagger';
import { AlertEntity } from './alert.entity';
import { CarEntity } from './car.entity';

export class AlertCarEntity implements IAlertCar {
  @ApiProperty()
  id: string;

  @ApiProperty()
  alertId: string;

  @ApiProperty()
  carId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  alerta?: AlertEntity;

  @ApiProperty()
  veiculo?: CarEntity;

  constructor(
    { alerta, ...data }: Partial<AlertCarEntity>,
    { veiculo, ...value }: Partial<AlertCarEntity>,
  ) {
    Object.assign(this, data);
    Object.assign(this, value);

    if (alerta) {
      this.alerta = new AlertEntity(alerta);
    }

    if (veiculo) {
      this.veiculo = new CarEntity(veiculo);
    }
  }
}
