import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title = 'Login form';
  public loginform!: FormGroup;

  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['', [Validators['required']]],
      password: ['', [Validators['required']]],
    });
  }

  logdata() {
    this.http.get<any>('http://localhost:3000/signupusers/').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.username === this.loginform.value.username &&
            a.password === this.loginform.value.pass
          );
        });
        if (user) {
          alert('Login Successful');
          this.loginform.reset();
          this.router.navigate(['showlist']);
        } else {
          alert('user not found');
        }
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
