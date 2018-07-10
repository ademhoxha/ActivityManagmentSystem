import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None, // to edit primeNg style form css file
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // script
    this.waveClick();// wave click

  }

  waveClick(){
    function waveClickEffectLg(e) {

      var d = document.createElement("div");
      d.className = "_click-wave-lg";
      d.style.top = e.clientY + "px";
      d.style.left = e.clientX + "px";

      document.body.appendChild(d);
      d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d);
      }.bind(this));

    }
    $('._click-effect-lg').click(waveClickEffectLg)


    function waveClickEffectSm(e) {

      var d = document.createElement("div");
      d.className = "_click-wave-sm";
      d.style.top = e.clientY + "px";
      d.style.left = e.clientX + "px";

      document.body.appendChild(d);
      d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d);
      }.bind(this));

    }
    $('._click-effect-sm').click(waveClickEffectSm)


  }

}
