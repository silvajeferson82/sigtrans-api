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

declare interface ICreateCar {
  car: ICar;
}

declare interface HTTPRequestObject {
  car?: ICar;
  id?: string;
  create?: IRequestCar;
  update?: IRequestCar;
}