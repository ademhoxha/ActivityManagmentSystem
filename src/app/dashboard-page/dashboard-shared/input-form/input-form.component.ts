import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ScriptUtils, ScriptType } from '@app/scripts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  @Output() onRefresh = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    let scripts = new ScriptUtils();
    scripts.execScriptFunction(ScriptType.InputFormRequiredScripts);
  }

  refresh() {
    this.onRefresh.emit();
  }

  home() {
    this.router.navigate(["./dashboard/resume"])
  }

}
