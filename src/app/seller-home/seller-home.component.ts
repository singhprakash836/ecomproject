import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../SellerData';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { timer } from 'rxjs';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit{
iconDel=faTrash
iconEdit=faEdit
//msg_delete=undefined


  msg_delete:string | undefined
  productservice=inject(ProductService)

  productList:Product[] | undefined
  ngOnInit(): void {

  this.fetch()

 
}  


  
fetch(){
  this.productservice.fetchProducts().subscribe((result)=>{
    //console.log(result)
  this.productList=result

    });
}

deleteProduct(id: number) {
  this.productservice.deleteservice(id).subscribe((result=>{
    console.log(result)
    this.msg_delete="Product is deleted"
    if(result){
  this.fetch()
    
    }
  }))
  setTimeout(() => {
    this.msg_delete=undefined
  }, 3000);
  }
}
