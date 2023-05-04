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
  tipo: Enum_Tipo | string;

  @ApiProperty()
  situacao: Enum_Situacao | string;

  @ApiProperty()
  status: Enum_Status | string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
