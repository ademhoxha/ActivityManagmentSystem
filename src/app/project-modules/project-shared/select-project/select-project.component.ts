import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ProjectApiService } from  '@app/project-modules/project-core/project-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit {

  @Output() returnFunction = new EventEmitter<any>();

  projectList;
  constructor(private projectAPI: ProjectApiService, private router: Router) { }

  ngOnInit() {
    this.getProjectList();
  }


  getProjectList() {

    this.projectAPI.projectListRequest(null).then((res: any) => {
      console.log("status: " + res.status)
      if (res.status == 200) {
        this.projectList = res.projectList;
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.returnFunction.emit({ state: "error", message: "Project List Can't be retrived, please reload the page" });
      }

    });
  }

  projectSearch(selectedItem) {
    this.returnFunction.emit({selected : selectedItem});
  }

}


/*import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ProjectApiService } from '../../services/project-api.service';
import { Router } from '@angular/router';


import { AfterViewInit, ViewChild } from '@angular/core';
import { DropdownListComponent } from '../../list-components/dropdown-list/dropdown-list.component';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit, AfterViewInit {


  @ViewChild(DropdownListComponent)
  public projectListComponent: DropdownListComponent;
  ngAfterViewInit() {
  }


  @Output() returnFunction = new EventEmitter<any>();

  projectList;
  constructor(private projectAPI: ProjectApiService, private router: Router) { }

  ngOnInit() {
    this.getProjectList();
  }


  getProjectList() {

    this.projectAPI.projectListRequest(null).then((res: any) => {
      console.log("status: " + res.status)
      if (res.status == 200) {
        this.projectList = res.projectList;
      }
      else if (res.status == 401) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.returnFunction.emit({ state: "error", message: "Project List Can't be retrived, please reload the page" });
      }

    });
  }

  projectSearch() {
   this.returnFunction.emit({selected : this.projectListComponent.selectedItem});
  }

}*/

