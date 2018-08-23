import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-top-menu',
  templateUrl: './app-top-menu.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app-top-menu.component.css']
})
export class AppTopMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(link){
    this.router.navigate([link])
  }

}
