import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { SellerService } from './services/seller.service';
import {inject } from '@angular/core';
//import { isEmpty } from 'rxjs';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {



  if(localStorage.getItem("seller")){

    return true
  } 
  const sellerService = inject(SellerService)
  //boolean kmh=sellerServie,isEmpty
  console.log("go to authgard page  :");
  console.log('guard status: ', sellerService.isSellerLogging.getValue());

  //return false
  return sellerService.isSellerLogging.getValue()
}
