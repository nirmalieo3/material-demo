import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const urlMockServer = " http://localhost:3000"
@Injectable({
    providedIn: 'root'
})
export class SharedService{
    cartItems:any = [];
    constructor(private http: HttpClient) { }
    getPizza():Observable<any>{
        return this.http.get(urlMockServer + '/pizza');
      }
    
    setCartItems(itemArray){
    
      this.cartItems.push(itemArray); 
    }  

    getCartItems(){
      return this.cartItems;
    }
      
}