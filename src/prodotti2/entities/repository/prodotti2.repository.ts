import { Prodotto } from 'src/factory';

export class Prodotti2Repository {
  prodotti2 = [
    { productid: 1, productname: 'Chai', unitprice: 180.0 },
    { productid: 2, productname: 'Chang', unitprice: 190.0 },
    { productid: 3, productname: 'Aniseed Syrup', unitprice: 130.0 },
    {
      productid: 4,
      productname: "Chef Anton's Cajun Seasoning",
      unitprice: 1.5,
    },
    { productid: 5, productname: "Chef Anton's Gumbo Mix", unitprice: 0.01 },
    {
      productid: 6,
      productname: "Grandma's Boysenberry Spread",
      unitprice: 250.0,
    },
    {
      productid: 7,
      productname: "Uncle Bob's Organic Dried Pears",
      unitprice: 30.0,
    },
    { productid: 8, productname: 'Northwoods Cranberry Sauce', unitprice: 1.5 },
    { productid: 9, productname: 'Mishi Kobe Niku', unitprice: 97.0 },
    { productid: 10, productname: 'Ikura', unitprice: 3.0 },
  ];

  getAll(): Prodotto[] {
    return this.prodotti2;
  }
}
