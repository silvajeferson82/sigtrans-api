import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
          `Já existe um alerta para o carro com id ${data.carId}`,
        );
      }
      throw error;
    }
  }
  async update(id: string, data: CarAlert): Promise<AlertCarEntity> {
    const find = await this.findOne(id);
    if (!find) {
      throw new NotFoundException(`Não existe um alerta com id ${id} `);
    }
    if (find.alertId === data.alertId) {
      throw new ConflictException(
        `Veiculo já esta com alerta:  ${find.alertId} `,
      );
    }
    const result = await this.prisma.carAlert.update({
      where: { id },
      data: { ...data },
      include: {
        alerta: true,
        veiculo: true,
      },
    });
    return result;
  }

  findAll(): Promise<AlertCarEntity[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<AlertCarEntity> {
    const result = await this.prisma.carAlert.findUnique({
      where: { id },
    });
    return result;
  }
  remove(id: string): Promise<AlertCarEntity> {
    throw new Error('Method not implemented.');
  }
}
