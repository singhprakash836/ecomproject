import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
menyType:string="default"
sellerName:string=""
  constructor(private router:Router){

  }
  ngOnInit(): void {

     this.router.events.subscribe((value:any) =>{ 
    //  console.log(value.url)
      if(value.url){
        if(localStorage.getItem("seller")&& value.url.includes("seller")){


          var obj:any=localStorage.getItem("seller")
          //const myJSON = JSON.stringify(obj);

          let objJson = JSON.parse(obj);
          //console.log("Object ki length :"+objJson[0]['name'])

          if(objJson.name)
         this.sellerName=objJson.name
           else
           this.sellerName=objJson[0]["name"]

   //JSON.parse("name",localStorage.getItem("seller"));
    

          console.log(" seller data :"+localStorage.getItem("seller"))
         console.log("in seller Area")
         this.menyType="seller"
      }else{
          console.log("not in seller area")
          this.menyType="default"
      }
    }
     })

    throw new Error('Method not implemented.');
  }


  sellerLogout(){
   console.log("seller logout is fired")

    localStorage.removeItem("seller")
    this.router.navigate(["/"]);


  }

}
