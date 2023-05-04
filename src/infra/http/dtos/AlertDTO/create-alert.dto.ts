import { IsEnum, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlertDTO {
  @ApiProperty({ maxLength: 30 })
  @IsNotEmpty({ message: 'Informe um nome' })
  @MaxLength(30, {
    message: 'Tamanho maximo de 30 Caracteres',
  })
  nome: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A descrição não pode ser vazio' })
  descricao: string;

  @ApiProperty()
  @IsEnum(Enum_Tipo)
  @IsNotEmpty({ message: 'Informe tipo: "white"/"black" ' })
  tipo: Enum_Tipo;

  @ApiProperty()
  @IsEnum(Enum_Situacao)
  @IsNotEmpty({
    message:
      'Informe situação: "liberação","permissão","bloqueio", "impedimento"',
  })
  situacao: Enum_Situacao;

  @ApiProperty()
  @IsEnum(Enum_Status)
  @IsNotEmpty({ message: 'Informe status: "ativo"/"inativo"' })
  status: Enum_Status;
}
