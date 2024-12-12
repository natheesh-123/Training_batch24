import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { ProductDashComponent } from './crud/product-dash/product-dash.component';
import { ProductAddComponent } from './crud/product-add/product-add.component';
import { ProductEditComponent } from './crud/product-edit/product-edit.component';

export const routes: Routes = [
    // 2.default routing
    // { path: "", component: LoginComponent },

    // 3.redirecting 
    { path: "", redirectTo: "/login", pathMatch: "full" },
    // 1.naming 

    { path: "login", component: LoginComponent },


    {
        path: "maindashboard", component: MaindashboardComponent, children: [

            {path:"item",component:ItemComponent},
            {path:"productdash",component:ProductDashComponent},
            {path:"productdash",component:ProductDashComponent},
            {path:"productadd",component:ProductAddComponent},
            {path:"productedit/:id",component:ProductEditComponent},

            // 4.parametrize
            { path: "mypipe/:id", component: MypipeComponent },

            {path:"parent",component:ParentComponent},
            {path:"databinding",component:DatabindingComponent},


            // 5.child routing
            {
                path: "angform", component: AngformComponent, children: [
                    { path: "utdf", component: UtdfComponent },
                    { path: "rtf", component: RtfComponent },

                ]
            },
        ]
    }

];
