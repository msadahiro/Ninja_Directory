import { Component } from '@angular/core';

// decorator!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = "Michael";
  ninja ={
    name: "Naruto",
    belt: "Orange"
  };
}
