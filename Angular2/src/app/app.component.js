"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Component decorator is provided by the Angular core library, so we
// have to import it before using it. The import keyword is similar to
// using keyword in C#. Any exported member can be imported using import
// keyowrd.
var core_1 = require("@angular/core");
// The class is decorated with Component decorator which adds metadata
// to the class. We use the @ symbol to apply a decorator to the class
// Applying a decorator on a class is similar to applying an attribute
// to a class in C# or other programming languages. Component is just
// one of the deveral built-in decorators provided by angular. We will
// discuss the other decorators provided by angular in upcoming videos
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Test";
        this.isBold = true;
        this.isItalic = true;
        this.fontSize = "30";
        this.applyBoldClass = true;
        this.applyItalicClass = true;
        this.classesToApply = 'boldClass italicsClass';
        this.isDisabled = false;
        this.badHtml = 'Hello <script>alert("Hacked");</script> World';
        this.pageHeader = 'EmployeeDetails';
        this.firstName = 'Ram';
        this.lastName = 'Kumar';
        this.id = 10;
        this.imagePath = 'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + '' + this.lastName;
    };
    ;
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicClass
        };
        return classes;
    };
    ;
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };
        return styles;
    };
    ;
    AppComponent.prototype.onClick = function () {
        console.log("Button Clicked");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
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
        template: "<span>\n\t<button class='colorClass'>ColorClass Button</button><br/>\n\t<button class='colorClass' [class]='classesToApply' >ClassesToApply</button><br/>\n\t<button class='colorClass' [class.boldClass]='!applyBoldClass'>Apply Bold Class</button><br/>\n\t<button class='colorClass' [ngClass]='addClasses()'>Add Multiple Classes- ngClass</button><br/>\n\t<button style='color:red'\n                        [style.font-weight]=\"'isBold' ? 'bold' : 'normal'\">Style Binding\n                </button><br/><br/>\n\t<button style='color:red' [ngStyle]=\"addStyles()\">Add multiple classes- ngStyle</button><br/>\n\n\t<button on-click=\"onClick()\">Event Binding on-Click</button>\n\t<button (click)=\"onClick()\">Event Binding (click)</button><br/>\n\n\t Name : <input [value]='name' (input)='name=$event.target.value'>\n                <br>\n\tNGModel: <input [(ngModel)]='name'><br/>\n                You entered : {{name}}<br/>\n\t\n\n\t<input id='inputId' type='text' value='Tom'><br/>\n\t<button disabled='{{isDisabled}}'>Click me Interpolation</button><br/>\n\t<button [disabled]='isDisabled'>Click me Property Binding</button><br/>\n\t<button bind-disabled='isDisabled'>Click me using bind</button><br/>\n\t<div>Div Interpolation :{{badHtml}}</div><br/>\n\t<div [innerHtml]=\"badHtml\"></div><br/>\n\t\t\t\t<my-employee></my-employee>\n\t\t\t\t <h1>{{'Inter Value Check = ' + id}}</h1>\n\t\t\t\t <h1>Adding 10+20+30: {{ 10 + 20 + 30 }}</h1>\n\t\t\t\t <h1>{{firstName ? firstName : 'No name specified'}}</h1>\n\t\t\t\t Display Image<img src='{{imagePath}}'/>\n\t\t\t\t<br/><br/> {{'Full Name = ' + getFullName()}}\n\t</span>\n\t<my-employee></my-employee>\n\t<h1> {{pageHeader}}\n\t<list-employee></list-employee>\n\t</h1>",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map