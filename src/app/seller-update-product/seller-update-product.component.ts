import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../SellerData';
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {
  
  productservice=inject(ProductService)
  activeRoute=inject(ActivatedRoute)
  mProduct:Product | undefined
  mPupdate:string|undefined
   mId=this.activeRoute.snapshot.paramMap.get('id')
    
   ngOnInit(): void {
if(this.mId)
    this.productservice.getProduct(this.mId).subscribe((result)=>{

   if(result){
    console.log(result);
    this.mProduct=result
   }

    });
    throw new Error('Method not implemented.');
  }
  updateProduct(mProduct:Product) {
   // console.log('id is '+this.mId);
   if(this.mId){
   mProduct.id=Number(this.mId)
  this.productservice.updateProductService(mProduct).subscribe((result)=>{
   console.log(result)
  this.mPupdate="Product has updated"
  })
  setTimeout(() => {
    this.mPupdate=undefined
  }, 3000);
    }}

}
