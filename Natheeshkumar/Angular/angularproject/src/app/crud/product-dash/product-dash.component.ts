// import { Component } from '@angular/core';
// import { DbserviceService } from '../../shared/services/dbservice.service';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-product-dash',
//   imports: [CommonModule],
//   templateUrl: './product-dash.component.html',
//   styleUrl: './product-dash.component.css'
// })
// export class ProductDashComponent {


//   constructor(public dbObj: DbserviceService) { }
//   productArray: any;

//   ngOnInIt() {
//     this.fetchData();
//   }


//   fetchData() {
//     console.log("hsgd");
//     this.dbObj.getRecord("products").subscribe((res: any) => {
//      console.log(res);
//       this.productArray = res;
//     })
//   }

//   deleteData(id: any) {
  
//   if(window.alert(`are `)){

//   }
  

  

// }
import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-dash',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-dash.component.html',
  styleUrl: './product-dash.component.css'
})
export class ProductDashComponent {
  constructor(public dbService: DbserviceService) { }

  products:any;

  ngOnInit() {
    this.fetchData();
  }
  fetchData(){
    this.dbService.getRecord('products').subscribe((res:any) => { 
      // console.log(res); 
      this.products = res;
    });
  }

  deleteData(id:any){
    if(window.confirm("Are you sure")){
      this.dbService.deleteRecord('products', id).subscribe((res:any) => { 
          window.alert("Deleted Successfully");
          this.fetchData();
      });
    }
  }

}



