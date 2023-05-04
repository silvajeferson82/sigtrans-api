import { Injectable } from '@nestjs/common';
import { AlertEntity } from '../../domain/entities/alert.entity';
import { AlertRepository } from '../../domain/repositories/alert-repository';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AlertRepositoryPrisma implements AlertRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: IRequestAlert): Promise<AlertEntity> {
    const result = await this.prisma.alert.create({
      data,
    });
    return result;
  }
  findAll(): Promise<AlertEntity[]> {
    const result = this.prisma.alert.findMany();
    return result;
  }
  findOne(id: string): Promise<AlertEntity> {
    const result = this.prisma.alert.findUnique({
      where: { id },
    });
    return result;
  }
  update(id: string, alert: IRequestAlert): Promise<AlertEntity> {
    const result = this.prisma.alert.update({
      where: { id },
      data: { ...alert },
    });
    return result;
  }
  remove(id: string): Promise<AlertEntity> {
    const result = this.prisma.alert.delete({
      where: { id },
    });
    return result;
  }
}