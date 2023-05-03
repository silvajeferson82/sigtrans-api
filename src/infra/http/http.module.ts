import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CarsController } from './controllers/cars.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CarsController],
  providers: [],//useCases
})
export class HttpModule {}
