import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import * as $ from 'jquery';

import { RegistrationService } from '@app/registration-page/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: Http, private registrationService: RegistrationService) {
    this.initForm();
  }


  nameCharacter: RegExp = /^[A-Za-z\s]+$/;
  endRegistration : boolean = false;
  ngOnInit() {
  }

  ngAfterViewInit(){
    $('._view-password').click(function () {
      $(this).toggleClass('fa-eye fa-eye-slash');

      if ($(this).parents('span').find('input').prop("type") == "text")
        $(this).parents('span').find('input').prop("type", "password")
      else
        $(this).parents('span').find('input').prop("type", "text")
    })
  }

  // required fields
  first_name: AbstractControl;
  last_name: AbstractControl;
  email: AbstractControl;
  company: AbstractControl;
  password: AbstractControl;
  mobilePhone: AbstractControl;
  // required fields

  // response from api
  response: any;
  // response from api

  initForm() {
    this.registrationForm = this.formBuilder.group({
      first_name: new FormControl('',
        Validators.compose([Validators.required])
      ),

      last_name: new FormControl('',
        Validators.compose([Validators.required])
      ),

      email: new FormControl('',
        Validators.compose([Validators.required, Validators.email])
      ),

      company: new FormControl(''),

      password: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(6)/*, Validators.maxLength(20),
        Validators.pattern(/[a-z]+/), Validators.pattern(/[A-Z]+/), Validators.pattern(/[0-9]+/),
        Validators.pattern(/[\W]+/)*/])
      ),

      mobilePhone: new FormControl('',
        Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])
      )
    });

    this.first_name = this.registrationForm.get('first_name');
    this.last_name = this.registrationForm.get('last_name');
    this.email = this.registrationForm.get('email');
    this.company = this.registrationForm.get('company');
    this.password = this.registrationForm.get('password');
    this.mobilePhone = this.registrationForm.get('mobilePhone');
  }

  count: number = 0;
  passwordMatch: boolean = false;
  password_confirmation: String = "";

  passwordVerify() {
     if (this.password.valid && this.password_confirmation
       && this.password.value == this.password_confirmation) {
       this.passwordMatch = true;
     }
     else {
       this.passwordMatch = false;
     }
  }

  loader : boolean = false;
  resultFlag : boolean = false;
  resultData = [];
  onSubmit() {
    this.loader = true;
    if (this.passwordMatch) {
      var body = this.setRequestParameters();
      this.reset()
      this.registrationService.registrationRequest(body).then((res: any) => { 
        if (res.status == 200) {
          this.lanchReturnMessage("success", "Account Successfully Registered!");
          this.endRegistration = true;
        }
       /* else if (res.status == 401) {
          this.router.navigateByUrl('/login');
        }*/
        else {
          this.lanchReturnMessage("error", res.message);
          this.loader = false;
        }
      //  setTimeout(() => { this.resetForm(); }, 150)
      });
    }
  }

  setRequestParameters(): any {
    var body = {
      email: this.email.value,
      password: this.password.value,
      mobilephone: this.mobilePhone.value,
      company: this.company.value,
      name: this.first_name.value,
      surname: this.last_name.value,
    }
    return body;
  }

  lanchReturnMessage(severity, message) {
    this.resultData["severity"] = severity;
    this.resultData["message"] = message;
    this.resultFlag = true;
    setTimeout(() => {
      this.resultFlag = false;
    }, 4000)
  }

  reset() {
    this.registrationForm.reset();
    this.passwordMatch = false;
    this.password_confirmation = "";
  }

}
