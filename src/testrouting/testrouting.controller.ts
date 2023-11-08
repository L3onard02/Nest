import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { TestroutingService } from './testrouting.service';
import { Prodotto } from 'src/factory';

@Controller('Testrouting')
export class TestroutingController {
  constructor(private readonly testroutingService: TestroutingService) {}
  @Get()
  getProdotti(): string {
    return 'tutti';
  }

  @HttpCode(200) //HTTPcodice di base
  @Get('all')
  getAll(): Prodotto {
    return this.testroutingService.findAll;
  }

  @Get('all/best')
  getAllBest(): string {
    return 'all/best';
  }

  @Get(':id') // prodotti/1
  GetProdottoId(
    @Param('id') id: number,
    @Query('prezzo') price: number,
  ): string {
    return `id:${id} prezzo:${price}`;
  }

  @Get('pippo') // prodotti/?prezzo=2.5&giacenza=10 (QUERYSTRING: CASE SENSITIVE)
  TrovaProdotti1(
    @Query('prezzo') price: number,
    @Query('giacenza') stock: number,
  ) {
    return price + ' ' + stock;
  }

  @Get('/:prezzo/:giacenza')
  TrovaProdotti(@Param('prezzo') price: any, @Param('giacenza') stock: number) {
    return price + ' ' + stock;
  }

  TrovaProdotti2(@Query() queryString: any): string {
    return (
      'prezzo: ' + queryString.prezzo + ' giacenza: ' + queryString.giacenza
    );
    // prodotti/2.5/?giacenza=10 (ATTENZIONE: può andare in conflitto con prodotti/id)
  }

  @Get(':prezzo')
  TrovaProdotti3(
    @Query('giacenza') stock: number,
    @Param('prezzo') price: number,
  ) {}

  @Get('iniziale/:char') // prodotti/iniziale/c
  GetProdottiByIniziale(@Param('iniziale') iniz: string) {}
}
