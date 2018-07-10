import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-click-wave',
  templateUrl: './click-wave.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./click-wave.component.css']
})
export class ClickWaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   /* function waveClickEffect(e) {

      var d = document.createElement("div");
      d.className = "_click-wave";
      d.style.top = e.clientY + "px";
      d.style.left = e.clientX + "px";

      document.body.appendChild(d);
      d.addEventListener('animationend', function () {
        d.parentElement.removeChild(d);
      }.bind(this));

    }
    $('._click-effect').click(waveClickEffect)
*/

    /*function temp(e) {
      var target = $(e.currentTarget);
      console.log(target)
      console.log(e)
      target[0].addClass("_click-wave-Special");
      target[0].children().addEventListener('animationend', function () {
        target[0].removeClass("_click-wave-Special");
      }.bind(this));

    }
    $('._click-effect-2').click(temp)*/
  }

}
