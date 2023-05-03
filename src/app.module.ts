import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/infra/database/database.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [DatabaseModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
