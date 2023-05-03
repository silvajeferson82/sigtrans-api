import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto {
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
  uf: string;

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
}
