import { Injectable } from '@nestjs/common';
import { CreateProdotti2Dto } from './dto/create-prodotti2.dto';
import { UpdateProdotti2Dto } from './dto/update-prodotti2.dto';
//import { prodotti2 } from './entities/prodotti2.entity';

@Injectable()
export class Prodotti2Service {
  create(createProdotti2Dto: CreateProdotti2Dto) {
    return 'This action adds a new prodotti2';
  }

  findAll() {
    return 'prodotti2';
  }

  findOne(id: number) {
    return `This action returns a #${id} prodotti2`;
  }

  update(id: number, updateProdotti2Dto: UpdateProdotti2Dto) {
    return `This action updates a #${id} prodotti2`;
  }

  remove(id: number) {
    return `This action removes a #${id} prodotti2`;
  }
}
