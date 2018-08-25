import { Component, ContentChildren, QueryList, Output, EventEmitter, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { StepItemComponent } from '@app/dashboard-page/dashboard-shared/step-item/step-item.component';

import { ScriptUtils, ScriptType } from '@app/scripts';

@Component({
  selector: 'app-step-menu',
  templateUrl: './step-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./step-menu.component.css']
})
export class StepMenuComponent implements AfterViewInit {

  ngAfterViewInit()  {
    let scripts = new ScriptUtils();
    scripts.execScriptFunction(ScriptType.StepMenuRequiredScripts);
  }

  @ContentChildren(StepItemComponent) items: QueryList<StepItemComponent>;

  @Output() onChange = new EventEmitter<any>();
  constructor() { }

  selectTab(item: StepItemComponent) {
    console.log(item)
    if (item.disabled != true) {
      this.items.forEach((x: StepItemComponent) => {
        x.active = (x.title == item.title) ? true : false;
      });
      this.onChange.emit({ title: item.title })
    }
  }


}