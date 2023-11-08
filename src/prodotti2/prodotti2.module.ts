import { Module } from '@nestjs/common';
import { Prodotti2Service } from './prodotti2.service';
import { Prodotti2Controller } from './prodotti2.controller';

@Module({
  controllers: [Prodotti2Controller],
  providers: [Prodotti2Service],
  exports: [Prodotti2Service],
})
export class Prodotti2Module {}
