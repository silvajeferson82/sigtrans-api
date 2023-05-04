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
import { CarEntity } from '../../../../application/entities/car.entity';
import {
  CreateCarUseCase,
  GetCarsUseCase,
  GetCarByIdUseCase,
  UpdateCarUseCase,
  DeleteCarUseCase,
} from '../../../../application/useCases';
import { CreateCarDto } from '../../dtos/create-car.dto';
import { UpdateCarDto } from '../../dtos/update-car.dto';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(
    private readonly createCars: CreateCarUseCase,
    private readonly getCars: GetCarsUseCase,
    private readonly getCarById: GetCarByIdUseCase,
    private readonly updateCars: UpdateCarUseCase,
    private readonly deleteCar: DeleteCarUseCase,
  ) { }

  @Post()
  @ApiCreatedResponse({ type: CarEntity })
  create(@Body() createCarDto: CreateCarDto) {
    return this.createCars.execute(createCarDto);
  }

  @Get()
  @ApiOkResponse({ type: CarEntity, isArray: true })
  findAll() {
    return this.getCars.execute();
  }

  @Get(':id')
  @ApiOkResponse({ type: CarEntity })
  findOne(@Param('id') id: string) {
    return this.getCarById.execute({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: CarEntity })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    const data = { id, updateCarDto };
    return this.updateCars.execute(data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CarEntity })
  remove(@Param('id') id: string) {
    return this.deleteCar.execute({ id });
  }
}
