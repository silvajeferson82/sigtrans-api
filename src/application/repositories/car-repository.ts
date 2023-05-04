import { CarEntity } from '../entities/car.entity';

export abstract class CarRepository {
  abstract create(data: IRequestCar): Promise<CarEntity>;
  abstract findAll(): Promise<CarEntity[]>;
  abstract findOne(id: string): Promise<CarEntity>;
  abstract update(id: string, car: IRequestCar): Promise<CarEntity>;
  abstract remove(id: string): Promise<CarEntity>;
}
