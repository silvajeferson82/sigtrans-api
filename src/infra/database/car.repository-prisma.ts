import { Injectable } from '@nestjs/common';
import { CarEntity } from 'src/application/entities/car.entity';
import { CarRepository } from 'src/application/repositories/car-repository';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CarRepositoryPrisma implements CarRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: IRequestCar): Promise<CarEntity> {
    const result = await this.prisma.car.create({
      data,
    });

    return result;
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
    const result = await this.prisma.car.update({
      where: { id },
      data: { ...data },
    });

    return result;
  }
  async remove(id: string): Promise<CarEntity> {
    const result = await this.prisma.car.delete({
      where: { id },
    });

    return result;
  }
}
