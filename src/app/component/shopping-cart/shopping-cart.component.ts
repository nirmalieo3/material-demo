import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/services/sharedService';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
 
  public cartItems: any;
  public totalPrice: number;
 
  constructor(private sharedService: SharedService) {
   
   }

  ngOnInit(): void {
    console.log(this.sharedService.getCartItems());
    this.cartItems = this.sharedService.getCartItems();
    this.cartItems.map(val=> val['quantity'] = 1);
   
    this.getUniqueItems()
    this.getTotalPrice();
  }

  public deleteItem(item, index){
    this.cartItems.splice(index, 1);
    this.getTotalPrice();
  }

  public getTotalPrice(){
    let total = 0;
    this.cartItems.map(val=>{
      total = total + Number(val.price) * Number(val.quantity)
    });
    this.totalPrice = total;
  }

  public getUniqueItems(){
    let uniqueIds = {};
    let uniqueItems = [];
    this.cartItems.map(val =>{
      if(!uniqueIds[val.id]){
        uniqueIds[val.id] = 1;
        uniqueItems.push(val);
      } else {
        uniqueIds[val.id] = uniqueIds[val.id] + 1;
        val['quantity'] = uniqueIds[val.id];
        uniqueItems.map(item => {
          if(item.id == val.id){
            item['quantity'] = val.quantity;
          }
        })
      }
    });
    this.cartItems = uniqueItems;
  }
}
