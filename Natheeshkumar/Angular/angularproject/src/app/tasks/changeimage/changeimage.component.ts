import { Component } from '@angular/core';

@Component({
  selector: 'app-changeimage',
  imports: [],
  templateUrl: './changeimage.component.html',
  styleUrl: './changeimage.component.css'
})
export class ChangeimageComponent {

  imagePath='../../public/images/messi.jpg';
  value:string="messi"
  toggle(value:string){
    if(value=="ronaldo"){
      this.imagePath="../../public/images/ronaldo.jpg"
      this.value="ronaldo"
    }
    else if(value=="surez"){
      this.imagePath = "../../public/images/surez.jpg"
      this.value="surez"
    }

    else if(value=="Neymar"){
      this.imagePath = "../../public/images/Neymar.jpg"
      this.value="Neymar"
    }

    else if(value=="messi"){
      this.imagePath = "../../public/images/messi.jpg"
      this.value="messi"
    }

}
}
