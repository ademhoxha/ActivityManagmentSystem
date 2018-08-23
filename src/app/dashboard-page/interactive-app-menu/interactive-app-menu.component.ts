import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';

import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FunctionViewFunctionComponent } from '@app/dashboard-page/function-view-function/function-view-function.component';
import { FunctionFactory } from '@app/dashboard-page/interactive-app-menu/FunctionFactory';

@Component({
  selector: 'app-interactive-app-menu',
  templateUrl: './interactive-app-menu.component.html',
  styleUrls: ['./interactive-app-menu.component.css']
})
export class InteractiveAppMenuComponent implements OnInit {


  @ViewChild("functionContainer", { read: ViewContainerRef }) container;

  componentRef: ComponentRef<FunctionViewFunctionComponent>;
  createComponent(id) {
    this.container.clear(); 
    let factory = this.resolver.resolveComponentFactory(FunctionViewFunctionComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.functions = (new FunctionFactory()).generateFunctions(id);
    this.componentRef.instance.returnFunction.subscribe( (ret) => { this.onFunctionSelected(ret)});
  }


  functionView = false;
  constructor(private router: Router, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  /*ngAfterViewInit() {
    $('div').click(function (e) {

      if (e.target.id != 'appPanel' && $("#appPanel").hasClass("_over-panel-yes-visible") && !$(e.target).hasClass("_open-app-menu")
        && !$(e.target).parents('._over-panel').length && !$(e.target).parents('._open-app-menu').length) {

        $("#appPanel").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
        $("#appPanel").children('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible')

      }

    });

  }*/

  ngAfterViewInit() {
    $('div').click(function (e) {
      if ($("._panel-first-level").hasClass('_over-panel-yes-visible') && !$(e.target).hasClass("._over-panel")
        && !$(e.target).parents('._over-panel').length && !$(e.target).parents('._open-app-menu').length) {

        if ($("._panel-second-level").hasClass('_over-panel-yes-visible')) {
          $("._panel-second-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
          $("._panel-second-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
        }

        $("._panel-first-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
        $("._panel-first-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
      }
    });
  }

  overPanel() {
    if ($("._panel-second-level").hasClass('_over-panel-yes-visible')) {
      $("._panel-second-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
      $("._panel-second-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
    }

    $("._panel-first-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
    $("._panel-first-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
  }

  onAppSelected(ret) {

    if(this.componentRef){
      this.componentRef.destroy(); 
    }

    this.createComponent(ret.id);
    if ($("._panel-second-level").hasClass('_over-panel-no-visible')) {
      $("._panel-second-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
      $("._panel-second-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
    }
  }

  overSecondLevelPanel() {
    $("._panel-second-level").find('._over-panel-close').toggleClass('_over-panel-close-yes-visible _over-panel-close-no-visible');
    $("._panel-second-level").toggleClass('_over-panel-no-visible _over-panel-yes-visible');
  }

  onFunctionSelected(ret){
    this.router.navigate(["./dashboard/"+ret.id])
  }

}
