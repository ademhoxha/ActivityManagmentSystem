import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent implements OnInit {

  @Input() list: any;
  @Output() returnFunction = new EventEmitter<any>();

  selectedItem: any;
  constructor() { }

  ngOnInit() {
    if (this.list[0]) {
      this.selectedItem = this.list[0].value;
      this.onChange();
    }
  }

  onChange() {
    if (this.returnFunction) {
      var ret = { selectedItem: this.selectedItem };
      this.returnFunction.emit(ret);
    }
  }
  
}
