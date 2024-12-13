import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  uid:any
  upass:any
  userData:any

  constructor (private _dbObj:DbserviceService, private _router:Router){};

  checkUser(){
    this._dbObj.getRecord("user").subscribe((res)=>{
      this.userData=res;
      const cutrrentUser =this.userData.filter((val:any,index:any)=>{
return val.userid===this.uid && val.userpass===this.upass
      });

      if(cutrrentUser.length >0){
        sessionStorage.setItem("user",this.uid);
        window.alert("login succesfully");
        this._router.navigate(["/maindashboard"])
      }
      else{
        window.alert("wrong credentials");
        this.uid="";
        this.upass="";
      }
    })
  }



}
