import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CarsController } from './controllers/car-constrollers/cars.controller';
import { CreateCarUseCase } from '../../application/useCases';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController],
  providers: [CreateCarUseCase], //useCases
})
export class HttpModule {}
