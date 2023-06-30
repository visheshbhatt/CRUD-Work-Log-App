import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  public signupform!: FormGroup;

  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  ngOnInit(): void {
    this.signupform = this.fb.group({
      firstname: ['', [Validators['required']]],
      // [Validators.maxLength(10)]
      lastname: ['', [Validators['required']]],
      username: ['', [Validators['required']]],
      email: ['', [Validators['email']]],
      pass: ['', [Validators['required']]],
      // ,[Validators.pattern('[0001-9999]+$')],[Validators.pattern('[a-z,A-Z]+$')]
    });
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}
  reginp() {
    this.http
      .post<any>('http://localhost:3000/signupusers/', this.signupform.value)
      .subscribe(
        (res) => {
          alert('Signup Successful');
          this.signupform.reset();
          this.router.navigate(['main']);
        },
        (err) => {
          alert('Something Went Wrong');
        }
      );
  }
}
