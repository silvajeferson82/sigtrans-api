import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
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
import { CarsMiddleware } from './middlewares/cars.middleware';
import { ChassiMiddleware } from './middlewares/chassi.middleware';
import { PlacaMiddleware } from './middlewares/placa.middleware';

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
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CarsMiddleware)
      .forRoutes({ path: 'cars', method: RequestMethod.POST })
      .apply(ChassiMiddleware, PlacaMiddleware)
      .forRoutes({ path: 'cars/:id', method: RequestMethod.PATCH });
  }
}
