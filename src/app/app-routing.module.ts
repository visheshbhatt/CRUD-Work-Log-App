import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { LogtabComponent } from './logtab/logtab.component';
import { ShowlistComponent } from './showlist/showlist.component';

const routes: Routes = [
  {path: '', redirectTo:'main', pathMatch:'full'},
  {path:'main', component: MainComponent},
  {path:'signup', component: SignupComponent},
  {path:'logtab/:id', component: LogtabComponent},
  {path:'logtab', component: LogtabComponent},
  {path:'showlist', component: ShowlistComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
