import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-task-reduced-view',
  templateUrl: './new-task-reduced-view.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../project-reduced-view/project-reduced-view.component.css',
    './new-task-reduced-view.component.css'
  ]
})
export class NewTaskReducedViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
