import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { listmodel } from '../model/logtab.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
})
export class ShowlistComponent implements OnInit {
  public listmodelobj: listmodel = new listmodel();
  public listform!: FormGroup;
  public tododatalist!: any;
  workimagefile: any;

  //child component

  ngOnInit(): void {
    this.gettodo();
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginservice: LoginService,
    private http: HttpClient
  ) {}

  gettodo() {
    this.loginservice.getdata().subscribe((res) => {
      this.tododatalist = res;
      console.log(this.tododatalist);
    });
  }

  deletetodo(row: any) {
    this.loginservice.deletedata(row.id).subscribe((res) => {
      alert('Product Deleted Successfully');
      this.gettodo();
    });
  }
}

// localStorage.setItem("vishesh",JSON.stringify(this.listmodelobj));
// var objvishesh =JSON.parse(localStorage.getItem("vishesh"))
