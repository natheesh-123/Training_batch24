import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { MypipeComponent } from './mypipe/mypipe.component';
import { ToggleimageComponent } from './tasks/toggleimage/toggleimage.component';
import { ChangeimageComponent } from './tasks/changeimage/changeimage.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ParentComponent,MypipeComponent
    ,ToggleimageComponent,ChangeimageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
