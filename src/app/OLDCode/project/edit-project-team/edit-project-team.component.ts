import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-edit-project-team',
  templateUrl: './edit-project-team.component.html',
  styleUrls: ['./edit-project-team.component.css']
})
export class EditProjectTeamComponent implements OnInit {

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
