import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-product-edit',
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {

id:any;
prodData:any;
constructor(private _actRoute:ActivatedRoute,private _dbObj:DbserviceService,private _router:Router){}

ngOnInIt(){
  this._actRoute.params.subscribe((param:any)=>{
    this.id=param.id;
    this._dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
      this.prodData={...res}
    })
  })
}


addData(data:any){
  this._dbObj.updateRecord("products",this.id,data).subscribe(()=>{
    this._router.navigate(["/maindashboad/productadd"]);
  })

}

}
