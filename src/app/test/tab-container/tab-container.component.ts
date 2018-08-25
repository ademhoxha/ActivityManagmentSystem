import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '@app/test/tab/tab.component';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css']
})
export class TabContainerComponent implements AfterContentInit {
  ngAfterContentInit(): void {
  }
  ngOnInit(): void {

  }


  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  constructor() { }


  selectTab(tab : TabComponent) {
    console.log(tab.title);
    tab.active = !tab.active;
  }
}
