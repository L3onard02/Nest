import { PartialType } from '@nestjs/mapped-types';
import { CreateProdotti2Dto } from './create-prodotti2.dto';

export class UpdateProdotti2Dto extends PartialType(CreateProdotti2Dto) {}
