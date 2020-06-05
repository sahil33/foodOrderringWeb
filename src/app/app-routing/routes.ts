import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { ItemdetailComponent } from '../itemdetail/itemdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CartlistComponent } from '../cartlist/cartlist.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'itemdetail/:id',     component: ItemdetailComponent},
  { path:'checkout', component: CartlistComponent}
];