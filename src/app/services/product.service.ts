import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../SellerData';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProduct(id: string | null) {
    var url="http://localhost:3000/products/"+id
    return  this.http.get<Product>(url)
  }

  constructor(private http:HttpClient) { }
  updateProductService(mProduct:Product) {
    var url="http://localhost:3000/products/"+mProduct.id
    return  this.http.put<Product>(url,mProduct)
    //var url="http://localhost:3000/products/"+id

  }
  deleteservice(id: number) {
    var url="http://localhost:3000/products/"+id

    console.log(url)
    return this.http.delete(url)
  }
  fetchProducts() {
  return  this.http.get<Product[]>("http://localhost:3000/products")
  }
  

  addProdctService(data: Product) {

    return this.http.post("http://localhost:3000/products",data,{observe:'response'});
    
  }

  


}
