import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  @Input() list: any;
  selectedItem: any;
  constructor() { }

  ngOnInit() {
    this.selectedItem = this.list[0].value;
  }
}
