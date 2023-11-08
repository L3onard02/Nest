import { Controller, Get } from '@nestjs/common';
import { ProdottiService } from './prodotti.service';

@Controller('prodotti')
export class ProdottiController {
  constructor(private prodottiService: ProdottiService) {}
  @Get()
  getProdotti(): string {
    return this.prodottiService.getProdotti();
  }
}
