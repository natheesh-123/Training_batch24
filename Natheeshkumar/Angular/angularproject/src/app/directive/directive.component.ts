import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  isCond1:boolean=true;
isCond2:boolean=false;
isCond3:boolean=!true;

courses:string[]=["raect","angular","python","dotnet","java"];
myCourse:string="Angular";
}


