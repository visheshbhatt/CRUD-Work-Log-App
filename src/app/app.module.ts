import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LogtabComponent } from './logtab/logtab.component';
import { ShowlistComponent } from './showlist/showlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SignupComponent,
    LogtabComponent,
    ShowlistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
