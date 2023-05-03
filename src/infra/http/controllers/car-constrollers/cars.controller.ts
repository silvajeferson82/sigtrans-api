import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CarEntity } from 'src/application/entities/car.entity';
import { CreateCarUseCase } from '../../../../application/useCases/car-useCases/create-car-useCase';
import { CreateCarDto } from '../../dtos/create-car.dto';
// import { UpdateCarDto } from '../core/dtos/update-car.dto';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(private readonly carsService: CreateCarUseCase) {}

  @Post()
  @ApiCreatedResponse({ type: CarEntity })
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.execute(createCarDto);
  }

  // @Get()
  // findAll() {
  //   return this.carsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.carsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
  //   return this.carsService.update(+id, updateCarDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.carsService.remove(+id);
  // }
}
