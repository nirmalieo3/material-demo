import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path:'', redirectTo: 'home',pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'menu', component: MenuComponent },
  {path:'shoppingCart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
