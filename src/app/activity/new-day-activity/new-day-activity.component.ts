import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-new-day-activity',
  templateUrl: './new-day-activity.component.html',
  styleUrls: ['./new-day-activity.component.css']
})
export class NewDayActivityComponent implements OnInit {

  componentForm: FormGroup;
  resultFlag: boolean = false;
  resultData = {};
  constructor(private formBuilder: FormBuilder, private confirmationService: ConfirmationService,
    private http: Http) { }


  ngOnInit() {
    this.initForm();
  }

  initForm() { }
  onSubmit() { }

}
