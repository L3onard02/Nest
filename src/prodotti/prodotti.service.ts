import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdottiService {
  getProdotti(): string {
    return 'all products';
  }
}
