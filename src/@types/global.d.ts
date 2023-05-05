namespace NodeJS {
  interface ProcessEnv {
    PORT: int;
  }
}

declare interface ICar {
  id: string;
  placa: string;
  chassi: string;
  marca: string;
  modelo: string;
  UF: string;
  categoria: string;
  tipo: string;
  especie: string;
  ano: number;
  createdAt: Date;
  updatedAt: Date;
}

declare interface IRequestCar {
  placa: string;
  chassi: string;
  marca: string;
  modelo: string;
  UF: string;
  categoria: string;
  tipo: string;
  especie: string;
  ano: number;
  createdAt?: Date;
  updatedAt?: Date;
}

declare enum Enum_Situacao {
  LIBERACAO = 'liberação',
  PERMISSAO = 'permissão',
  BLOQUEIO = 'bloqueio',
  IMPEDIMENTO = 'impedimento',
}

declare enum Enum_Tipo {
  WHITE = 'white',
  BLACK = 'black',
}

declare enum Enum_Status {
  ATIVO = 'ativo',
  INATIVO = 'inativo',
}

declare interface IAlert {
  nome: string;
  descricao: string;
  tipo: Enum_Tipo | string;
  situacao: Enum_Situacao | string;
  status: Enum_Status | string;
  createdAt: Date;
  updatedAt: Date;
}

declare interface IRequestAlert {
  nome: string;
  descricao: string;
  tipo: Enum_Tipo | string;
  situacao: Enum_Situacao;
  status: Enum_Status;
  createdAt?: Date;
  updatedAt?: Date;
}

declare interface IAlertCar {
  id: string;
  alertId: string;
  carId: string;
  createdAt: Date;
  updatedAt?: Date;
  alerta?: IAlert;
  veiculo?: ICar;
}
declare interface IRequestAlertCar {
  alertId: string;
  carId: string;
  createdAt?: Date;
  updatedAt?: Date;
  alerta?: IAlert;
  veiculo?: ICar;
}

declare interface ICreateCar {
  car: ICar;
}

declare interface HTTPRequestObject {
  car?: ICar;
  id?: string;
  placa?: string;
  create?: IRequestCar;
  update?: IRequestCar;
  createAlert?: IRequestAlert;
  updateAlert?: IRequestAlert;
}