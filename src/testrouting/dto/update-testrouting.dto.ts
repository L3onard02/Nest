import { PartialType } from '@nestjs/mapped-types';
import { CreateTestroutingDto } from './create-testrouting.dto';

export class UpdateTestroutingDto extends PartialType(CreateTestroutingDto) {}
