import { AlertEntity } from '../entities/alert.entity';

export abstract class AlertRepository {
  abstract create(data: IRequestAlert): Promise<AlertEntity>;
  abstract findAll(): Promise<AlertEntity[]>;
  abstract findOne(id: string): Promise<AlertEntity>;
  abstract update(id: string, alert: IRequestAlert): Promise<AlertEntity>;
  abstract remove(id: string): Promise<AlertEntity>;
}
