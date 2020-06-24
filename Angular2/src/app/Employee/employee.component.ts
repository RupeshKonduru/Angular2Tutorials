import {Component} from '@angular/core'

@Component({
	selector:'my-employee',
	 styleUrls: ['app/Employee/employee.component.css'],
	templateUrl:'app/Employee/employee.component.html',
	
})

export class EmployeeComponent{
	columnSpan: number = 2;
	 firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
	showDetails: boolean = false;
	 toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}