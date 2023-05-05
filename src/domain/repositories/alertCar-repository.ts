import { AlertCarEntity } from '../entities/alert-car.entity';

export abstract class AlertCarRepository {
  abstract create(data: IRequestAlertCar): Promise<AlertCarEntity>;
  abstract findAll(): Promise<AlertCarEntity[]>;
  abstract findOne(id: string): Promise<AlertCarEntity>;
  abstract update(
    id: string,
    alertCar: IRequestAlertCar,
  ): Promise<AlertCarEntity>;
  abstract remove(id: string): Promise<AlertCarEntity>;
}
