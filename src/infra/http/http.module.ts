import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CarsController } from './controllers/car-constrollers/cars.controller';
import { AlertsController } from './controllers/alert-controller/alerts.controller';
import {
  CreateCarUseCase,
  GetCarsUseCase,
  GetCarByIdUseCase,
  UpdateCarUseCase,
  DeleteCarUseCase,
  GetCarByPlateUseCase,
  CreateAlertUseCase,
  GetAlertByIdUseCase,
  GetAlertsUseCase,
  UpdateAlertUseCase,
  DeleteAlertUseCase,
} from '../../application/useCases';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController, AlertsController],
  providers: [
    CreateCarUseCase,
    GetCarsUseCase,
    GetCarByIdUseCase,
    UpdateCarUseCase,
    DeleteCarUseCase,
    GetCarByPlateUseCase,
    CreateAlertUseCase,
    GetAlertByIdUseCase,
    GetAlertsUseCase,
    UpdateAlertUseCase,
    DeleteAlertUseCase,
  ], //useCases
})
export class HttpModule {}
