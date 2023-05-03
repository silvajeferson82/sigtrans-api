import { CarEntity } from '../entities/car.entity';

export abstract class CarRepository {
  abstract create(car: CarEntity): Promise<CarEntity>;
  abstract findAll(): Promise<CarEntity[]>;
  abstract findOne(id: string): Promise<CarEntity>;
  abstract update(id: string, car: CarEntity): Promise<CarEntity>;
  abstract remove(id: string): Promise<CarEntity>;
}
