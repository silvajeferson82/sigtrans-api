import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AlertEntity } from '../../../../domain/entities/alert.entity';
import {
  CreateAlertUseCase,
  DeleteAlertUseCase,
  GetAlertByIdUseCase,
  GetAlertsUseCase,
  UpdateAlertUseCase,
 } from '../../../../application/useCases/index';
import { CreateAlertDTO } from '../../dtos/AlertDTO/create-alert.dto';

@Controller('alerts')
@ApiTags('alerts')
export class AlertsController {
  constructor(
    private readonly createAlerts: CreateAlertUseCase,
    private readonly getAlertById: GetAlertByIdUseCase,
    private readonly getAlerts: GetAlertsUseCase,
    private readonly updateAlerts: UpdateAlertUseCase,
    private readonly deleteAlerts: DeleteAlertUseCase,
  ) { }

  @Post()
  @ApiCreatedResponse({ type: AlertEntity })
  async create(@Body() createAlertDto: CreateAlertDTO) {
    return await this.createAlerts.execute(createAlertDto);
  }

  @Get()
  @ApiOkResponse({ type: AlertEntity, isArray: true })
  async findAll() {
    return await this.getAlerts.execute();
  }

  @Get(':id')
  @ApiOkResponse({ type: AlertEntity })
  async findOne(@Param('id') id: string) { 
    return await this.getAlertById.execute({ id });
  }

  @Patch(':id')
  @ApiOkResponse({ type: AlertEntity })
  async update(
    @Param('id') id: string,
    @Body() updateAlertDto: CreateAlertDTO,
  ) {
    return await this.updateAlerts.execute({ id, updateAlert: updateAlertDto });
  } 

  @Delete(':id')
  @ApiOkResponse({ type: AlertEntity })
  async delete(@Param('id') id: string) {
    return await this.deleteAlerts.execute({ id });
  }
}
