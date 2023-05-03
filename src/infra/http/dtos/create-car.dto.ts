import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCarDto {
  // @IsString()
  // @ApiProperty()
  // id: string;

  @IsNotEmpty({ message: 'Informe a placa' })
  @IsString()
  @ApiProperty()
  placa: string;

  @IsNotEmpty({ message: 'Informe o chassi' })
  @IsString()
  @ApiProperty()
  chassi: string;

  @IsNotEmpty({ message: 'Informe a marca' })
  @IsString()
  @ApiProperty()
  marca: string;

  @IsNotEmpty({ message: 'Informe o modelo' })
  @IsString()
  @ApiProperty()
  modelo: string;

  @IsNotEmpty({ message: 'Informe a UF' })
  @IsString()
  @ApiProperty()
  UF: string;

  @IsNotEmpty({ message: 'Informe a categoria' })
  @IsString()
  @ApiProperty()
  categoria: string;

  @IsNotEmpty({ message: 'Informe o tipo' })
  @IsString()
  @ApiProperty()
  tipo: string;

  @IsNotEmpty({ message: 'Informe a especie' })
  @IsString()
  @ApiProperty()
  especie: string;

  @IsInt({ message: 'Informe um valor númerico' })
  @IsNotEmpty({ message: 'Informe o ano' })
  @ApiProperty()
  ano: number;

  // @Transform(({ value }) => new Date())
  @IsOptional()
  @IsDate()
  createdAt: Date = new Date();

  @IsOptional()
  @IsDate()
  updatedAt: Date = new Date();
}
