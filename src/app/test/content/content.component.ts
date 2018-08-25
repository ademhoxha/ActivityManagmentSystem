import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  active1 = false;
  active2 = true;
  title1 = "TITLE 1";
  title2 = "TITLE 2";
  constructor() { }

  ngOnInit() {
  }

}
