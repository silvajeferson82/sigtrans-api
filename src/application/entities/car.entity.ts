import { ApiProperty } from '@nestjs/swagger';
import { Car } from '@prisma/client';

export class CarEntity implements Car {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: true })
  placa: string;

  @ApiProperty({ required: true })
  chassi: string;

  @ApiProperty()
  marca: string;

  @ApiProperty()
  modelo: string;

  @ApiProperty()
  ano: number;

  @ApiProperty()
  UF: string;

  @ApiProperty()
  categoria: string;

  @ApiProperty()
  tipo: string;

  @ApiProperty()
  especie: string;
}
