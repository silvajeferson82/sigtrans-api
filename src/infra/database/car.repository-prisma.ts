import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CarEntity } from 'src/application/entities/car.entity';
import { CarRepository } from 'src/application/repositories/car-repository';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class CarRepositoryPrisma implements CarRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(car: Prisma.CarCreateInput): Promise<CarEntity> {
    const newCar = await this.prisma.car.create({
      data: car,
    });

    return newCar;
  }
  findAll(): Promise<CarEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<CarEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, car: CarEntity): Promise<CarEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<CarEntity> {
    throw new Error('Method not implemented.');
  }
}
