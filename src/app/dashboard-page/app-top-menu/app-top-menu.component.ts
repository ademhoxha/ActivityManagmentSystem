import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptUtils, ScriptType } from '@app/scripts';

@Component({
  selector: 'app-app-top-menu',
  templateUrl: './app-top-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app-top-menu.component.css']
})
export class AppTopMenuComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(link) {
    this.router.navigate([link])
  }

  ngAfterViewInit() {
    let scripts = new ScriptUtils();
    scripts.execScriptFunction(ScriptType.AppTopMenuRequiredScripts);
  }

}
