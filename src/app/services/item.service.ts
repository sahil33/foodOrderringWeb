import { Injectable } from '@angular/core';
import {Item} from '../shared/item';
import {ITEMS} from '../shared/items';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItems(): Observable<Item[]>{
    return of(ITEMS);
   }
   getItem(id: string): Observable<Item> {
    return of(ITEMS.filter((item) => (item.id === id))[0]);
  }
}
