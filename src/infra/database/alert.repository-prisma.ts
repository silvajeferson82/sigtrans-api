import { Injectable } from '@nestjs/common';
import { AlertEntity } from 'src/application/entities/alert.entity';
import { AlertRepository } from 'src/application/repositories/alert-repository';
import { PrismaService } from './prisma/prisma.service';


@Injectable()
export class AlertRepositoryPrisma implements AlertRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(data: IRequestAlert): Promise<AlertEntity> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<AlertEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<AlertEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, alert: IRequestAlert): Promise<AlertEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<AlertEntity> {
    throw new Error('Method not implemented.');
  }
}