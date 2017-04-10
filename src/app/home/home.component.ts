import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Ninja Directory"
  @Input() ninja;
  @Output() onYell = new EventEmitter();

  // then it fires this. onYell has emit. 
  fireYellEvent(e){
    this.onYell.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
