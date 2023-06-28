import { Component, inject } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { SellerData, SellerLoginData } from '../SellerData';
//import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent {
  sellerService=inject(SellerService)
  router=inject(Router)

  
  showError :String="";
  showLogin=false
  ngOnInit():void{
  
     this.sellerService.reloadSeller()


  }
  signUp(data:SellerData):void{
   // console.log(data);
   this.sellerService.sellerSignUpService(data);

      /* this.sellerService.sellerSignUpService(data).subscribe(response => 
        
        
        {
        //console.log(response)
        if(response){
          this.router.navigate(['seller-home'])
        }
  }); */
      

}
openLogin(){
this.showLogin=true
}
openSignUp(){
  this.showLogin=false
  }
  
login(data:SellerLoginData){
  this.sellerService.sellerLoginService(data);

   this.sellerService.isSellerUserLogedIn.subscribe((loginerror)=>{
     if(loginerror){
this.showError="Please Enter Correct Detail!!";
     }
  else{
    this.showError="";

    
  }
  });
   


}
      };

    
     
              
        
            
  


