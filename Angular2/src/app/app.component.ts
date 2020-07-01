// Component decorator is provided by the Angular core library, so we
// have to import it before using it. The import keyword is similar to
// using keyword in C#. Any exported member can be imported using import
// keyowrd.
import {Component} from '@angular/core'

// The class is decorated with Component decorator which adds metadata
// to the class. We use the @ symbol to apply a decorator to the class
// Applying a decorator on a class is similar to applying an attribute
// to a class in C# or other programming languages. Component is just
// one of the deveral built-in decorators provided by angular. We will
// discuss the other decorators provided by angular in upcoming videos
@Component({
    // component has several properties. Here we are using just 2. For
    // the full list of properties refer to the following URL
    // https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html
    // To use this component on any HTML page we specify the selector
    // This selector becomes the directive <my-app> on the HTML page
    // At run time, the directive <my-app> is replaced by the template
    // HTML specified below
    selector: 'my-app',
    // The template contains the HTML to render. Notice in the HTML
    // we have a data-binding expression specified by double curly
    // braces. We have a defualt value "Angular" assigned to "name"
    // property in the AppComponent class. This will be used at runtime
    // inplace of the data-binding expression
   //inputId.getAttribute('value')
   //inputId.value
	template: ` <span>
	<h1>Trackfor</h1>
	<list-trackfor></list-trackfor>
	<button class='colorClass'>ColorClass Button</button><br/>
	<button class='colorClass' [class]='classesToApply' >ClassesToApply</button><br/>
	<button class='colorClass' [class.boldClass]='!applyBoldClass'>Apply Bold Class</button><br/>
	<button class='colorClass' [ngClass]='addClasses()'>Add Multiple Classes- ngClass</button><br/>
	<button style='color:red'
                        [style.font-weight]="'isBold' ? 'bold' : 'normal'">Style Binding
                </button><br/><br/>
	<button style='color:red' [ngStyle]="addStyles()">Add multiple classes- ngStyle</button><br/>

	<button on-click="onClick()">Event Binding on-Click</button>
	<button (click)="onClick()">Event Binding (click)</button><br/>

	 Name : <input [value]='name' (input)='name=$event.target.value'>
                <br>
	NGModel: <input [(ngModel)]='name'><br/>
                You entered : {{name}}<br/>
	

	<input id='inputId' type='text' value='Tom'><br/>
	<button disabled='{{isDisabled}}'>Click me Interpolation</button><br/>
	<button [disabled]='isDisabled'>Click me Property Binding</button><br/>
	<button bind-disabled='isDisabled'>Click me using bind</button><br/>
	<div>Div Interpolation :{{badHtml}}</div><br/>
	<div [innerHtml]="badHtml"></div><br/>
				<my-employee></my-employee>
				 <h1>{{'Inter Value Check = ' + id}}</h1>
				 <h1>Adding 10+20+30: {{ 10 + 20 + 30 }}</h1>
				 <h1>{{firstName ? firstName : 'No name specified'}}</h1>
				 Display Image<img src='{{imagePath}}'/>
				<br/><br/> {{'Full Name = ' + getFullName()}}
	</span>
	<my-employee></my-employee>
	<h1> {{pageHeader}}
	<list-employee></list-employee>
	</h1>`,
				 
	//templateUrl:'app/app.Component.html'
})
// export keyword allows this class to be exported, so other components 
// in the application can import and use it if required
export class AppComponent {
  	serText: string = 'LifeCycle';
	name:string="Test";
	isBold:boolean=true;
	isItalic:boolean=true;
	fontSize:string="30";
	applyBoldClass:boolean=true;
	applyItalicClass:boolean=true;
	classesToApply:string='boldClass italicsClass';
	isDisabled:boolean=false;
	badHtml: string = 'Hello <script>alert("Hacked");</script> World';
    pageHeader: string = 'EmployeeDetails';
	firstName:string='Ram';
	lastName:string='Kumar';
	id: number=10;
	imagePath: string = 'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';
	getFullName():string{
		return this.firstName+''+this.lastName;
	};
	addClasses(){
	 let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicClass
        };
		return classes;
	};
	addStyles() {
        let styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };

        return styles;
    };
	onClick():void{
		console.log("Button Clicked");
	}
}


