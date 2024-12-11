import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubePipe } from '../shared/custompipe/cube.pipe';
import { SquarePipe } from '../shared/custompipe/square.pipe';
@Component({
  selector: 'app-mypipe',
  imports: [CommonModule,CubePipe,SquarePipe],
  templateUrl: './mypipe.component.html',
  styleUrl: './mypipe.component.css'
})
export class MypipeComponent {

  msg:string="welcome you all in changpond";
  emp={id:101,name:"natheesh",salary:50000,state:"tamilnadu"};
  dateObj=new Date();


}
