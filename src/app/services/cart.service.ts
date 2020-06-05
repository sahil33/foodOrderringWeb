import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  addItem(item){
    this.items.push(item);
  }

  getItems(){
    return this.items;
  }
  delItems(){
     this.items=[];
     return this.items;
  }
  constructor() { }
}
