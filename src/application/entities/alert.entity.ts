import { ApiProperty } from '@nestjs/swagger';

export class AlertEntity implements IAlert {
  constructor(partial: Partial<AlertEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  descricao: string;

  @ApiProperty()
  tipo: Enum_Tipo;

  @ApiProperty()
  situacao: Enum_Situacao;

  @ApiProperty()
  status: Enum_Status;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
