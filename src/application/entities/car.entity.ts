import { Car } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CarEntity implements Car {

  // constructor(partial: Partial<CarEntity>) {
  //   Object.assign(this, partial);
  // }

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

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
