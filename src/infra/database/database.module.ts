import { Module } from '@nestjs/common';
import { AlertRepository } from 'src/application/repositories/alert-repository';
import { CarRepository } from '../../application/repositories/car-repository';
import { AlertRepositoryPrisma } from './alert.repository-prisma';
import { CarRepositoryPrisma } from './car.repository-prisma';
import { PrismaService } from './prisma/prisma.service';

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
  ],
})
export class DatabaseModule {}
