import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
import { AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  @Input() inputData: any;  // input parameter
  @Output() returnFunction = new EventEmitter<any>(); // output parameter

  otpForm: FormGroup;
  otpCode: AbstractControl;
  time: number;
  duration: number;
  fadeTime: number;
  constructor(private formBuilder: FormBuilder) {
    this.checkInput();
    this.initForm();
  }

  ngOnInit() {
    this.startChronometer();
  }

  initForm() {
    this.otpForm = this.formBuilder.group({
      otpCode: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])
      )
    });

    this.otpCode = this.otpForm.get('otpCode');
  }

  checkInput() {
    if (!this.inputData || !this.inputData.fadeTime || this.inputData.fadeTime <= 0)
      this.fadeTime = 4000;
    if (!this.inputData || !this.inputData.duration || this.inputData.duration <= 0)
      this.duration = 15000;
    this.time = this.duration / 1000;
  }

  startChronometer() {
    // nav bar
    $("#bar001").animate({
      width: "0%",
    }, this.duration, "linear", () => {
      $("#otpBar").fadeTo(this.fadeTime, 0, () => {
        this.returnFunction.emit({ status: 201 });
      });

    });
    // timer
    var interval = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(interval);
      }
    }, 1000);
    // fade bar an timer
    $("#otpBar").fadeIn(this.fadeTime);
  }

  codeSended: boolean = false;
  onOTPSubmit() {
    this.codeSended = true;
    var code = this.otpCode.value;
    var retData = {
      code: this.otpCode.value,
      status: 200
    }
    $("#otpBar").fadeTo(this.fadeTime, 0, () => {
      this.returnFunction.emit(retData);
    });
  }

}
