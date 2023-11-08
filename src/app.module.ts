import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; //import per vedere oggetto
import { ProdottiModule } from './prodotti/prodotti.module';
import { ProdottiService } from './prodotti/prodotti.service';
import { Prodotti2Controller } from './prodotti2/prodotti2.controller';
import { Prodotti2Module } from './prodotti2/prodotti2.module';
import { TestroutingController } from './testrouting/testrouting.controller';
import { TestroutingModule } from './testrouting/testrouting.module';
import { Prodotti2Repository } from './testrouting/entities/repository/prodotti.repository';

@Module({
  imports: [ProdottiModule, Prodotti2Module, TestroutingModule],
  controllers: [AppController],
  //providers: [ProdottiService],
  //tutto cio che a me serve utilizzare. Può essere sia import che export(ci si mettono solitamente i service)
  providers: [AppService],
})
export class AppModule {}
