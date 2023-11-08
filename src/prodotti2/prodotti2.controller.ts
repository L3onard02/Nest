import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prodotti2Service } from './prodotti2.service';
import { CreateProdotti2Dto } from './dto/create-prodotti2.dto';
import { UpdateProdotti2Dto } from './dto/update-prodotti2.dto';

@Controller('prodotti2')
export class Prodotti2Controller {
  constructor(private readonly prodotti2Service: Prodotti2Service) {}

  @Post()
  create(@Body() createProdotti2Dto: CreateProdotti2Dto) {
    return this.prodotti2Service.create(createProdotti2Dto);
  }

  @Get()
  findAll() {
    return this.prodotti2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodotti2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdotti2Dto: UpdateProdotti2Dto) {
    return this.prodotti2Service.update(+id, updateProdotti2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodotti2Service.remove(+id);
  }
}
