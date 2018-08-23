import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as $ from 'jquery';

import { AuthApiService } from '@app/login-page/auth-api/auth-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() inputData: any; // input json
  @Output() returnFunction = new EventEmitter<any>(); // output event function

  loginForm: FormGroup;
  loader;
  constructor(private formBuilder: FormBuilder, private http: Http, private authApiService: AuthApiService) {
    this.initForm();
  }

  ngOnInit() {
    
    $('._view-password').click(function () {
      $(this).toggleClass('fa-eye fa-eye-slash');

      if ($(this).parents('span').find('input').prop("type") == "text")
        $(this).parents('span').find('input').prop("type", "password")
      else
        $(this).parents('span').find('input').prop("type", "text")
    })
  }

  password: FormControl;
  email: FormControl;
  initForm() {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('',
        Validators.compose([Validators.required])),
      email: new FormControl('',
        Validators.compose([Validators.required]))
    });

    this.password = <FormControl>this.loginForm.get('password');
    this.email = <FormControl>this.loginForm.get('email');

  }

  resetForm() {
    this.loginForm.reset();
  }


  onSubmit() {
    var data = {
      email: this.email.value,
      password: this.password.value
    };
    this.resetForm();

    this.loader = true;

    this.authApiService.otpRequest(data).then((res: any) => {
      //this.loader = false;
      if (res.status == 200) {
        this.loader = false;
        $("#loginDiv").fadeTo(1500, 0, () => {
          var retData: any = data;
          retData.status = 200;
          this.returnFunction.emit(retData);
        });
      }
      else if (res.status == 204) {
        // OTP not required
        var retData: any = data;
        retData.status = 204;
        this.returnFunction.emit(retData);
      }
      else {
        this.loader = false;
        var retData: any = data;
        retData.status = res.status;
        retData.message = res.message;
        this.returnFunction.emit(retData);

      }

    });
  }

}
