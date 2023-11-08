import { Module } from '@nestjs/common';
import { ProdottiController } from './prodotti.controller';
import { ProdottiService } from './prodotti.service';

@Module({
  controllers: [ProdottiController],

  //imports:[],
  //exports:[],
  exports: [ProdottiService],
  providers: [ProdottiService], //come dependency injection
})
export class ProdottiModule {}
