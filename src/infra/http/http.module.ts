import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CarsController } from './controllers/car-constrollers/cars.controller';
import {
  CreateCarUseCase,
  GetCarsUseCase,
  GetCarByIdUseCase,
  UpdateCarUseCase,
  DeleteCarUseCase,
} from '../../application/useCases';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController],
  providers: [
    CreateCarUseCase,
    GetCarsUseCase,
    GetCarByIdUseCase,
    UpdateCarUseCase,
    DeleteCarUseCase,
  ], //useCases
})
export class HttpModule {}
