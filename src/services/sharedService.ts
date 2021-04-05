import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from 'src/app/module/products';
/*const urlMockServer = " http://localhost:3000"*/
const urlMockServer = "https://run.mocky.io/v3/d4e3860b-3798-471e-b045-a8f4a2cbc8c4"
@Injectable({
    providedIn: 'root'
})
export class SharedService{
    cartItems:any = [];
    constructor(private http: HttpClient) { }
    /*getPizza():Observable<any>{
        return this.http.get(urlMockServer + '/pizza');
      }*/
      getPizza():Observable<Products[]>{
        return this.http.get<Products[]>(urlMockServer);
    }
    
    setCartItems(itemArray){
    
      this.cartItems.push(itemArray); 
    }  

    getCartItems(){
      return this.cartItems;
    }
      
}