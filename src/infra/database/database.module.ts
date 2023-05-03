import { Module } from '@nestjs/common';
import { CarRepository } from '../../application/repositories/car-repository';
import { CarRepositoryPrisma } from './car.repository-prisma';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: CarRepository,
      useClass: CarRepositoryPrisma,
    },
  ],
  exports: [
    {
      provide: CarRepository,
      useClass: CarRepositoryPrisma,
    },
  ],
})
export class DatabaseModule {}
