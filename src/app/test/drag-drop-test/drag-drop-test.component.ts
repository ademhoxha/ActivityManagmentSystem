import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-drag-drop-test',
  templateUrl: './drag-drop-test.component.html',
  styleUrls: ['./drag-drop-test.component.css']
})
export class DragDropTestComponent implements OnInit {

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
