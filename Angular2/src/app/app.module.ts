import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent }  from './Employee/employee.component';
import {FormsModule} from '@angular/forms'
import { EmployeeListComponent } from './employee/employeeList.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,EmployeeComponent,EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
