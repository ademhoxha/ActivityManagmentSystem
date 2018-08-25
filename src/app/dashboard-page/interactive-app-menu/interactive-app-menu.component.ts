import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';

import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FunctionViewFunctionComponent } from '@app/dashboard-page/function-view-function/function-view-function.component';
import { FunctionFactory } from '@app/dashboard-page/interactive-app-menu/FunctionFactory';
import { ScriptUtils, ScriptType } from '@app/scripts';

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
  scripts = new ScriptUtils();
  ngAfterViewInit() {
    this.scripts.execScriptFunction(ScriptType.PanelRequiredScripts);
  }

  overPanel() {
    this.scripts.execScriptFunction(ScriptType.PanelCloseAll);
  }

  onAppSelected(ret) {

    if(this.componentRef){
      this.componentRef.destroy(); 
    }

    this.createComponent(ret.id);
    this.scripts.execScriptFunction(ScriptType.PanelOpenSecond);
  }

  overSecondLevelPanel() {
    this.scripts.execScriptFunction(ScriptType.PanelToogleSecond);
  }

  onFunctionSelected(ret){
    this.router.navigate(["./dashboard/"+ret.id])
  }

}
