import { ConflictException, Injectable } from '@nestjs/common';
import { CarAlert } from '@prisma/client';
import { AlertCarEntity } from '../../domain/entities/alert-car.entity';
import { AlertCarRepository } from '../../domain/repositories/alertCar-repository';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AlertCarRepositoryPrisma implements AlertCarRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CarAlert): Promise<AlertCarEntity> {
    try {
      const result = await this.prisma.carAlert.create({ data });
      return result;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          `O ID ${data.carId} já esta com este alerta - situação`,
        );
      }
      throw error;
    }
  }
  findAll(): Promise<AlertCarEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<AlertCarEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, alertCar: IRequestAlertCar): Promise<AlertCarEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<AlertCarEntity> {
    throw new Error('Method not implemented.');
  }
}
