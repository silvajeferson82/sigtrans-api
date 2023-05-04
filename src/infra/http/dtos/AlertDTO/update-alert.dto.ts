import { PartialType } from '@nestjs/mapped-types';
import { CreateAlertDTO } from './create-alert.dto';

export class UpdateAlertDto extends PartialType(CreateAlertDTO) {}
