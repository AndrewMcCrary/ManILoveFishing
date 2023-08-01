import { item } from "../models/item.model";

export class itemService {
    constructor() { }

    getItems(): item[] {
        // fake, use api later
        let items: Array<item> = [
          { name: 'Fishing rod', price: 99.99, image: 'assets/15MITU30070M23007COM.webp' },
          { name: 'Tackle box', price: 12.49, image: 'assets/0980_11696_0031_000_large_02.jpg' },
          { name: 'Fake worms', price: 8.89, image: 'assets/fakeworm.jpg' },
          { name: 'Hooks', price: 4.50, image: 'assets/fishinghooks.jpg' },
          { name: 'Bobbers', price: 9.10, image: 'assets/bobbers.jpg' },
          { name: 'Hat', price: 36.50, image: 'assets/hat.jpg' },
          { name: 'Weights', price: 6.50, image: 'assets/weights.jpg' },
          { name: 'Cooler', price: 24.00, image: 'assets/cooler.jpg' }
        ];

        return items;
    }
}
