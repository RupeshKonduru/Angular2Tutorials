import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent }  from './Employee/employee.component';
import {FormsModule} from '@angular/forms'
import { EmployeeListComponent } from './employee/employeeList.component';
import { TrackForComponent } from './employee/trackfor.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,EmployeeComponent,EmployeeListComponent,TrackForComponent,EmployeeTitlePipe, EmployeeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
