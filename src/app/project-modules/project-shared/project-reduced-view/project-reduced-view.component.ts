import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-project-reduced-view',
  templateUrl: './project-reduced-view.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./project-reduced-view.component.css']
})
export class ProjectReducedViewComponent implements OnInit {

  @Input() projectName;
  @Input() projectEarnings;
  @Input() numberOfDays;
  @Input() estimatedWorkers;

  @Input() selledDays;
  @Input() costSelledDays;
  @Input() estimatedDays;
  @Input() estcostSelledDays;
  @Input() startDate;
  @Input() endDate;

  constructor() { }

  ngOnInit() {
  }

}
