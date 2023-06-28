import { EventEmitter, Injectable } from '@angular/core';
import { SellerData, SellerLoginData } from '../SellerData';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class SellerService {
  isSellerUserLogedIn=new EventEmitter<boolean>(false)
  isSellerLogging=new BehaviorSubject<boolean>(false)
  messge:boolean=false
  constructor(private http:HttpClient,private router:Router) {

   }
   sellerSignUpService(data:SellerData){
   // console.log("Seller Signup Service is called"+data.email);
   this.http.post('http://localhost:3000/seller',
   data,
   {
   observe:'response'}).subscribe((result)=>{
    
      this.isSellerLogging.next(true) 
      localStorage.setItem("seller",JSON.stringify(result.body))
      this.router.navigate(['seller-home'])
        
       
    
  });
}
reloadSeller(){
  if(  localStorage.getItem("seller")){
  this.isSellerLogging.next(true)
  this.router.navigate(['seller-home']) 
  }
}
sellerLoginService(data: SellerLoginData) {

  console.log("login button clicked");

this.http.get('http://localhost:3000/seller?email='+data.email+"&password="+data.password,{observe:'response'}).subscribe((result:any)=>{
  if(result&&result.body&&result.body.length)
  {
    this.isSellerUserLogedIn.emit(false);
    this.isSellerLogging.next(true)
    localStorage.setItem("seller",JSON.stringify(result.body))
    console.log("logine success!!!!!!!!!!!!"+   JSON.stringify(result.body))
    this.router.navigate(['seller-home']) 
  }else{
    this.isSellerUserLogedIn.emit(true);
    console.log("logine error!!!!!!!")
  } 
});
}

}