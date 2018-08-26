import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

import { } from '@angular/animations';
import { routerTransitions } from '@app/dashboard-page/dashboard-routing-animation';


@Component({
  selector: 'app-dashboard-app-view',
  templateUrl: './dashboard-app-view.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './../dashboard-variables.css', './dashboard-app-view.component.css', './../dashboard-main.css'],
  animations: routerTransitions
})
export class DashboardAppViewComponent implements OnInit {

  testClick(ro) {
    if (ro.activatedRouteData.state)
      return ro.activatedRouteData.state;
    return 'dashboard';
  }
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    console.log("change")
  }

  /*openOverPanel() {
    $("#appPanel").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
    $("#appPanel").children('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible')
  }*/

  overPanel() {
    if ($("._panel-second-level").hasClass('_over-panel-yes-visible')) {
      $("._panel-second-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
      $("._panel-second-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
    }

    $("._panel-first-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
    $("._panel-first-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
  }

}
