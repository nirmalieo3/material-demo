import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cartItems: any = [];

  pizzaList: any;
  constructor(public sharedService : SharedService) { }

  ngOnInit(): void {
    this.getDati();
  }
  
  getDati(){
   
    this.sharedService.getPizza().subscribe(data=>{
     
     console.log(data, 'Dati');
     this.pizzaList = data['Pizza'];
    })
  };

  public addToCart(item){
    this.cartItems.push(item);
    console.log('item', item);
    this.sharedService.setCartItems(item);
  }
 
}
