import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes=[]

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {FormsModule} from "@angular/forms";
import {FirstService} from "../services/First.service";
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ListuserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
