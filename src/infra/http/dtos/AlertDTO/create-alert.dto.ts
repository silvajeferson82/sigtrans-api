import { IsEnum, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum EnumTipo {
  BALCK = Enum_Tipo.BLACK,
  WHITE = Enum_Tipo.WHITE,
}

enum EnumSituacao {
  LIBERACAO = Enum_Situacao.LIBERACAO,
  PERMISSAO = Enum_Situacao.PERMISSAO,
  BLOQUEIO = Enum_Situacao.BLOQUEIO,
  IMPEDIMENTO = Enum_Situacao.IMPEDIMENTO,
}

enum EnumStatus {
  ATIVO = Enum_Status.ATIVO,
  INATIVO = Enum_Status.INATIVO,
}

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
  @IsEnum(EnumTipo)
  @IsNotEmpty({ message: 'Informe tipo: "white"/"black" ' })
  tipo: Enum_Tipo;

  @ApiProperty()
  @IsEnum(EnumSituacao)
  @IsNotEmpty({
    message:
      'Informe situação: "liberação","permissão","bloqueio", "impedimento"',
  })
  situacao: Enum_Situacao;

  @ApiProperty()
  @IsEnum(EnumStatus)
  @IsNotEmpty({ message: 'Informe status: "ativo"/"inativo"' })
  status: Enum_Status;
}
