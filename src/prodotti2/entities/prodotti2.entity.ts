import { ApiProperty } from '@nestjs/swagger';

export class Prodotto {
  @ApiProperty()
  productid: number;
  productname: string;
  unitprice: number;
}
