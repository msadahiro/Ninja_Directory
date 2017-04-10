import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Ninja Directory"
  // myString = "I like Angular2";
  // myBoolean = true;

  // alertMe(val){
  //   alert(val);
  // }
  ninja = {
    name: "Yoshi",
    belt:"Black"
  };

  constructor() { }

  ngOnInit() {
  }

}
