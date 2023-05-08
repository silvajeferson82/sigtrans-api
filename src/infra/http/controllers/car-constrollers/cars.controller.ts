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
import { CarEntity } from '../../../../domain/entities/car.entity';
import {
  CreateCarUseCase,
  GetCarsUseCase,
  GetCarByIdUseCase,
  UpdateCarUseCase,
  DeleteCarUseCase,
  GetCarByPlateUseCase,
  CreateAlertCarUseCase,
  UpdateAlertCarUseCase,
} from '../../../../application/useCases';
import { CreateCarDto } from '../../dtos/CarDTO/create-car.dto';
import { CreateAlertCarDTO } from '../../dtos/AlertCarDTO/create-alertCar.dto';
import { UpdateCarDto } from '../../dtos/CarDTO/update-car.dto';
import { UpdateAlertCartDto } from '../../dtos/AlertCarDTO/update-alertCar.dto';
import { AlertEntity } from '../../../../domain/entities/alert.entity';
import { AlertCarEntity } from '../../../../domain/entities/alert-car.entity';

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
    private readonly createAlertCar: CreateAlertCarUseCase,
    private readonly updateAlertCar: UpdateAlertCarUseCase,
  ) {}

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

  @Post('alert')
  @ApiCreatedResponse({ type: AlertCarEntity })
  async createAlert(@Body() createAlertcarDTO: CreateAlertCarDTO) {
    return await this.createAlertCar.execute(createAlertcarDTO);
  }

  @Patch('alert/:id')
  @ApiOkResponse({ type: AlertCarEntity })
  async updateAlert(
    @Param('id') id: string,
    @Body() updateAlertCarDto: UpdateAlertCartDto,
  ) {
    const data = { id, updateAlertCarDto };
    return await this.updateAlertCar.execute(data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CarEntity })
  async remove(@Param('id') id: string) {
    return await this.deleteCar.execute({ id });
  }
}
