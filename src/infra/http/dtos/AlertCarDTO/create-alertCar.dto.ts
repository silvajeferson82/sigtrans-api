import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlertCarDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'Informe o ID do alerta' })
  alertId: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Informe o ID do veiculo' })
  carId: string;
}
