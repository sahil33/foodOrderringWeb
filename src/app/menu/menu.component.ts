import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: Item[];

  selectedItem: Item;
  constructor(private itemService: ItemService) { }

  onSelect(item: Item) {
    this.selectedItem = item;
  }
  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
