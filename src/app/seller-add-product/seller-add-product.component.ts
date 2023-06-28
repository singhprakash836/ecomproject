import { Component, inject } from '@angular/core';

import { ProductService } from '../services/product.service';
import { Product } from '../SellerData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent {
mrouter=inject(Router)
 mProductService=inject(ProductService)
  
addProd(data: Product) {
this.mProductService.addProdctService(data).subscribe((result)=>{
if(result && result.body){
 // console.log(result)
 this.mrouter.navigate(['/seller-home'])
  alert("Product Add Successfully");
}
else{
  alert("Some Thing Is Going Wrong");
}

});



}

}
