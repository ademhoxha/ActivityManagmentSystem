import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-group-list',
  templateUrl: './dropdown-group-list.component.html',
  styleUrls: ['./dropdown-group-list.component.css']
})
export class DropdownGroupListComponent implements OnInit {

  @Input() list: any;
  @Output() returnFunction = new EventEmitter<any>();

  selectedItem: any;
  constructor() { }

  ngOnInit() {
    /*if (this.list[0]) {
      this.selectedItem = this.list[0].value;
      this.onChange();
    }*/
  }

  onChange() {
    if (this.returnFunction) {
      var ret = { selectedItem: this.selectedItem };
      this.returnFunction.emit(ret);
    }
  }

}
