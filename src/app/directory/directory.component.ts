import { FilterPipe } from '../filter.pipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    {name: "Naruto", belt:'black'},
    {name: "Saske", belt:'Blue'},
    {name: "Gara", belt: 'Brown'}
  ];
  constructor() {}

  ngOnInit() {
  }

}
