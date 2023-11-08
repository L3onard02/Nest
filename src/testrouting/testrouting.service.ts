import { Injectable } from '@nestjs/common';
import { CreateTestroutingDto } from './dto/create-testrouting.dto';
import { UpdateTestroutingDto } from './dto/update-testrouting.dto';
import { Prodotti2Repository } from './entities/repository/prodotti.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { Prodotto } from './entities/prodotti.entity';

@Injectable()
export class TestroutingService {
  constructor(
    @InjectRepository(Prodotto)
    private readonly prodotti2Repository: Prodotti2Repository,
  ) {}
  /*create(createTestroutingDto: CreateTestroutingDto) {
    return 'This action adds a new testrouting';
  }*/

  findAll() {
    try {
      return this.prodotti2Repository.getAll;
    } catch {}
  }

  findOne(id: number) {
    return this.prodotti2Repository.getAll;
  }
  /*
  update(id: number, updateTestroutingDto: UpdateTestroutingDto) {
    return `This action updates a #${id} testrouting`;
  }

  remove(id: number) {
    return `This action removes a #${id} testrouting`;
  }
  */
}
