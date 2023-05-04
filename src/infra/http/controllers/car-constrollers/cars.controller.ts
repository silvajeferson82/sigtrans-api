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
  GetCarByPlateUseCase,
} from '../../../../application/useCases';
import { CreateCarDto } from '../../dtos/CarDTO/create-car.dto';
import { UpdateCarDto } from '../../dtos/CarDTO/update-car.dto';

@Controller('cars')
@ApiTags('cars')
export class CarsController {
  constructor(
    private readonly createCars: CreateCarUseCase,
    private readonly getCars: GetCarsUseCase,
    private readonly getCarById: GetCarByIdUseCase,
    private readonly updateCars: UpdateCarUseCase,
    private readonly deleteCar: DeleteCarUseCase,
    private readonly getCarByPlate: GetCarByPlateUseCase,
  ) { }

  @Post()
  @ApiCreatedResponse({ type: CarEntity })
  async create(@Body() createCarDto: CreateCarDto) {
    return await this.createCars.execute(createCarDto);
  }

  @Get()
  @ApiOkResponse({ type: CarEntity, isArray: true })
  async findAll() {
    return await this.getCars.execute();
  }

  @Get(':id')
  @ApiOkResponse({ type: CarEntity })
  async findOne(@Param('id') id: string) {
    return await this.getCarById.execute({ id });
  }

  @Get('plate/:plate')
  @ApiOkResponse({ type: CarEntity })
  async findByPlate(@Param('plate') plate: string) {
    return await this.getCarByPlate.execute({ placa: plate });
  }

  @Patch(':id')
  @ApiOkResponse({ type: CarEntity })
  async update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    const data = { id, updateCarDto };
    return await this.updateCars.execute(data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CarEntity })
  async remove(@Param('id') id: string) {
    return await this.deleteCar.execute({ id });
  }
}
