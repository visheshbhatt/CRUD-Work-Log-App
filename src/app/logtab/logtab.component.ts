import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './../login.service';
import { listmodel } from '../model/logtab.model';

@Component({
  selector: 'app-logtab',
  templateUrl: './logtab.component.html',
})
export class LogtabComponent implements OnInit {
  //parent component
  public id!: number;
  @ViewChild('fileInput') fileInput: any;
  public listform!: FormGroup;
  isUpdate: boolean = false;
  listmodelobj: listmodel = new listmodel();
  PlatformOptions = ['Angular', 'ASP.net', 'Javascript'];

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('id', this.id);

    if (this.id) {
      this.isUpdate = true;
      this.setUpdateData();
    }

    this.listform = this.fb.group({
      days: ['', [Validators['required']]],
      date: ['', [Validators['required']]],
      time: ['', [Validators['required']]],
      doubts: ['', [Validators['email']]],
      todo: ['', [Validators['required']]],
      reported: ['', [Validators['required']]],
      platform: ['', [Validators['required']]],
      workimagefiles: ['', [Validators['required']]],
      conclusion: ['', [Validators['required']]],
    });
  }
  //formValue - listform

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginservice: LoginService,
    private rou: ActivatedRoute,
    private activatedRoute: ActivatedRoute
  ) {}

  setUpdateData() {
    this.loginservice.getDataById(this.id).subscribe((res: listmodel) => {
      console.log(res);
      this.listform.controls['days'].setValue(res.days);
      this.listform.controls['doubts'].setValue(res.doubts);
      this.listform.controls['date'].setValue(res.date);
      this.listform.controls['reported'].setValue(res.reported);
      this.listform.controls['time'].setValue(res.time);
      this.listform.controls['todo'].setValue(res.todo);
      this.listform.controls['workimagefiles'].setValue(res.workimagefiles);
      this.listform.controls['platform'].setValue(res.platform);
      this.listform.controls['conclusion'].setValue(res.conclusion);
    });
  }


  onFileChange(event : any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.listform.patchValue({
        fileSource: file
      });
    }
  }

  submitForm() {
    this.listmodelobj = this.listform.value;

    const formData = new FormData();
    formData.append('workimagefile', this.listform.get('workimagefile')?.value);
   
    this.http.post('http://localhost:3000/posts/', formData)

    if (this.isUpdate) {
      this.updatetodo();
    } else {
      this.addData();
    }
    this.router.navigate(['showlist']);
  }

  addData() {
    this.loginservice.postdata(this.listmodelobj).subscribe((res) => {
      console.log(res);
    });
  }
  updatetodo() {
    this.loginservice
      .updatedata(this.id, this.listmodelobj)
      .subscribe((res: any) => {
        // console.log(res)
      });
  }
}
