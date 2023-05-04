import { ConflictException, Injectable } from '@nestjs/common';
import { CarEntity } from '../../domain/entities/car.entity';
import { CarRepository } from '../../domain/repositories/car-repository';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CarRepositoryPrisma implements CarRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findByPlate(placa: string): Promise<CarEntity> {
    const result = await this.prisma.car.findUnique({
      where: { placa },
      include: {
        alertas: {
          include: {
            alerta: true,
          },
        },
      },
    });

    return result;
  }
  async create(data: IRequestCar): Promise<CarEntity> {
    try {
      const result = await this.prisma.car.create({
        data,
      });

      return result;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          `O valor informado para o campo ('${error.meta.target[0]}') já está em uso`,
        );
      }
      throw error;
    }
  }
  async findAll(): Promise<CarEntity[]> {
    const result = await this.prisma.car.findMany();

    return result;
  }
  async findOne(id: string): Promise<CarEntity> {
    const result = await this.prisma.car.findUnique({
      where: { id },
    });

    return result;
  }
  async update(id: string, data: IRequestCar): Promise<CarEntity> {
    try {
      const result = await this.prisma.car.update({
        where: { id },
        data: { ...data },
      });

      return result;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          `O valor informado para o campo ('${error.meta.target[0]}') já está em uso`,
        );
      }
      throw error;
    }
  }
  async remove(id: string): Promise<CarEntity> {
    const result = await this.prisma.car.delete({
      where: { id },
    });

    return result;
  }
}
