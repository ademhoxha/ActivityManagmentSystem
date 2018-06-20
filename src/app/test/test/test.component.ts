import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  filesTreeA : TreeNode[];
  filesTreeB : TreeNode[];
  selectedFile : TreeNode;
  ngOnInit() {
    var filesTree1 = [
      {
          label: "Backup",
          data: "Backup Folder",
          icon: "fa fa-file"
      },
      {
        label: "Backup111",
        data: "Backup Folder111",
        icon: "fa fa-file"
    }
  ];

  this.selectedFile = {
    
  }

  this.filesTreeA = [{
    label: 'Root',
    expandedIcon: "fa fa-folder-open",
    collapsedIcon: "fa fa-folder",
    children: filesTree1
  }]

  }


}
