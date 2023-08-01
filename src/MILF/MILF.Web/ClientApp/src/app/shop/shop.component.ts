import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products: Product[] = [
    {
      name: 'Fishing Pole',
      price: 10,
      image: 'assets/fishingpole.png'
    },
    {
      name: 'Fishing Chair',
      price: 20,
      image: 'assets/chair.png'
    },
    {
      name: 'Bobber',
      price: 1,
      image: 'assets/bobber.jpg'
    },
    {
      name: 'Tacklebox',
      price: 25,
      image: 'assets/tacklebox.png'
    }
  ];
}
