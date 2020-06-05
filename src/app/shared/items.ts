import { Item } from './item';

export const ITEMS: Item[] = [
 {
    id: '0',
    name: 'Pizza',
    image: '/assets/images/pizza.png',
    price: '450',
    // tslint:disable-next-line:max-line-length
    description: 'A pizza is indian food.'
  },
  {
    id: '1',
    name: 'Burger',
    image: '/assets/images/burger.png',
    price: '150',
    description: 'A burger is indian food'
  },
  {
    id: '2',
    name: 'Veg Biryani',
    image: '/assets/images/veg.png',
    price: '200',
    description: 'A biryani is indian food'
  },
  {
    id: '3',
    name: 'Cake',
    image: '/assets/images/cake.png',
    price: '400',
    description: 'Food'
  }
 ];