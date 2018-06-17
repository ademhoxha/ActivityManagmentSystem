import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.css']
})
export class BlockUiComponent implements OnInit {

  @Input() target : any;
  @Input() flag : any;
  constructor() { }

  ngOnInit() {
  }

}
