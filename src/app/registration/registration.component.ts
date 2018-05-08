import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.initForm();
  }

  ngOnInit() {
  }

  // required fields
  first_name: AbstractControl;
  last_name: AbstractControl;
  email: AbstractControl;
  company: AbstractControl;
  password: AbstractControl;
  mobilePhone: AbstractControl;
  // required fields

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
        Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20),
        Validators.pattern(/[a-z]+/), Validators.pattern(/[A-Z]+/), Validators.pattern(/[0-9]+/),
        Validators.pattern(/[\W]+/)])
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
    this.password.setValue(this.validatePasswordFormatAllKeys(this.password.value));
    this.password_confirmation = this.validatePasswordFormatAllKeys(this.password_confirmation);
    var psw: String = this.password.value;
    this.count = this.count + 1;
    if (this.password.valid && psw.trim() != ""
      && psw == this.password_confirmation) {
      this.passwordMatch = true;
    }
    else {
      this.passwordMatch = false;
    }
  }

  validatePasswordFormatAllKeys(password: String): String {
    if (password != null || password != "") {
      return password.replace(/\s/, '');
    }
    return "";
  }

  validatePasswordFormatSingleKey(password: String): String {
    if (password != null || password != "") {
      var key = password.charCodeAt(password.length - 1)
      var newpwd = password;
      if (key == 32 || key == 160 || key == 5760 || key == 8192 || key == 8192 || key == 8194 || key == 8195
        || key == 8196 || key == 8197 || key == 8198 || key == 8199 || key == 8200 || key == 8201 ||
        key == 8202 || key == 8232 || key == 8233 || key == 8239 || key == 8287 || key == 12288) {
        newpwd = newpwd.substring(0, password.length - 1)
      }
      return newpwd;
    }
    return "";
  }

  test = "";
  onSubmit() {
    this.test = "premuto";
    this.passwordVerify();
    if (this.passwordMatch)
      this.registrationRequest();
  }

  registrationRequest()/*: Observable<any> */ {
    this.test = "TRY TO SEND OTP";
    let url = "/api/registration";
    const body = this.setRequestParameters();
    this.httpClient.post(url, body).subscribe((res) => { this.test = "BACK FROM REGISTRATION"; });
  }

  setRequestParameters(): any{
    const body = new HttpParams()
    .set('email', this.email.value)
    .set('password', this.password.value)
    .set('mobilephone', this.mobilePhone.value)
    .set('company', this.company.value)
    .set('name', this.first_name.value)
    .set('surname', this.last_name.value);
    return body;
  }

}
