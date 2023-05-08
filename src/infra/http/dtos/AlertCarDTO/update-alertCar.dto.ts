import { PartialType } from '@nestjs/mapped-types';
import { CreateAlertCarDTO } from './create-alertCar.dto';

export class UpdateAlertCartDto extends PartialType(CreateAlertCarDTO) {}
