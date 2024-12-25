import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
myName:string="Natheesh kumar";
imgPath:string="./images/bird.jpg";
imgName:string="bird";

inputData:string="bicycle";

greeting(){
  window.alert("welcome");
}


greetings(val:string){
  window.alert(`goodmorning ${val}`);
}
}
