import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';

export const routes: Routes = [
    // 2.default routing
    // { path: "", component: LoginComponent },

    // 3.redirecting 
    { path: "maindashboard", redirectTo: "/login", pathMatch: "prefix" },
    // 1.naming 

    { path: "login", component: LoginComponent },
    {
        path: "maindashboard", component: MaindashboardComponent, children: [


            // 4.parametrize
            { path: "mypipe/:id", component: MypipeComponent },

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
