import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../services/item.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Cartitem } from '../shared/cartitem';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService} from '../services/cart.service';


@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.scss']
})
export class ItemdetailComponent implements OnInit {

  @ViewChild('fform')  cartitemDirective;
  item: Item;
  cartitem: Cartitem;
  cartitemForm: FormGroup;

  constructor(private itemservice: ItemService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private cartservice: CartService) { 
    }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.itemservice.getItem(id).subscribe(item => this.item = item);
    this.createform(this.item);
  }

  createform(item: Item) : void{
    this.cartitemForm = this.fb.group({
        itemname: [this.item.name],
        price: [this.item.price],
        size: [''],
        quantity: ['']
    });
  }

  onSubmit(){
    this.cartitem = this.cartitemForm.value;
    this.cartservice.addItem(this.cartitem);
    alert('Successfully item added to your cart.');
    this.cartitemForm.reset({
          itemname:'',
          price:'',
          size:'',
          quantity:''
    });
    this.cartitemDirective.resetForm();
  }

  
}
