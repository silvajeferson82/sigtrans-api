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
}

declare interface HTTPRequestObject {
  car?: Car;
  id: string;
}