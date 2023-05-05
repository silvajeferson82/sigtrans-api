import { Module } from '@nestjs/common';
import { AlertCarRepository } from '../../domain/repositories/alertCar-repository';
import { AlertRepository } from '../../domain/repositories/alert-repository';
import { CarRepository } from '../../domain/repositories/car-repository';
import { AlertRepositoryPrisma } from './alert.repository-prisma';
import { CarRepositoryPrisma } from './car.repository-prisma';
import { PrismaService } from './prisma/prisma.service';
import { AlertCarRepositoryPrisma } from './alertCar-repository-prisma';

@Module({
  providers: [
    PrismaService,
    {
      provide: CarRepository,
      useClass: CarRepositoryPrisma,
    },
    {
      provide: AlertRepository,
      useClass: AlertRepositoryPrisma,
    },
    {
      provide: AlertCarRepository,
      useClass: AlertCarRepositoryPrisma,
    },
  ],
  exports: [
    {
      provide: CarRepository,
      useClass: CarRepositoryPrisma,
    },
    {
      provide: AlertRepository,
      useClass: AlertRepositoryPrisma,
    },
    {
      provide: AlertCarRepository,
      useClass: AlertCarRepositoryPrisma,
    },
  ],
})
export class DatabaseModule {}
