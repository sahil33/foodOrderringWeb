import { Component, OnInit } from '@angular/core';
import { CartService} from '../services/cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.scss']
})
export class CartlistComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  items;
  dataSource;

  ngOnInit(): void {
      this.items = this.cartservice.getItems();
      this.dataSource = this.items;
  }
  displayedColumns: string[] = ['itemname', 'size', 'quantity', 'price','amount'];
 
  
}
