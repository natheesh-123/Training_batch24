import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { MypipeComponent } from './mypipe/mypipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ParentComponent,MypipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
