import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  @Input() list: any;
  @Input() label: any;
  @Output() returnFunction = new EventEmitter<any>();

  constructor() { }

  loaded: boolean;
  public sourceList;
  public targetList;
  targetLabel: string;
  sourceLabel: string;
  ngOnInit() {

    if (this.label && this.label['sourceLabel'])
      this.sourceLabel = this.label['sourceLabel'];
    else
      this.sourceLabel = "Available";

    if (this.label && this.label['targetLabel'])
      this.targetLabel = this.label['targetLabel'];
    else
      this.targetLabel = "Selected";

      this.targetList = [];
      this.sourceList = this.list;
  }

  onExchange(){
    var data = {};
    data['sourceList'] = this.sourceList;
    data['targetList'] = this.targetList;
    this.returnFunction.emit(data);
  }

}
