import { item } from "../models/item.model";

export class itemService {
    constructor() { }

    getItems(): item[] {
        // fake, use api later
        let items: Array<item> = [
          { name: 'Fishing rod', price: 99.99, image: 'assets/15MITU30070M23007COM.webp' },
          { name: 'Tackle box', price: 12.49, image: 'assets/0980_11696_0031_000_large_02.jpg' }
        ];

        return items;
    }
}
