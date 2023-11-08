import { ApiProperty } from '@nestjs/swagger';

export class Prodotto {
  @ApiProperty()
  productid: number;
  @ApiProperty()
  productname: string;
  @ApiProperty()
  unitprice: number;
}
