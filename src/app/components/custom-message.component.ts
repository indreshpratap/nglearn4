import { Component, Input, Output } from "@angular/core";


@Component({
    selector: "app-custom-message",
    template: `<div class="message" [ngClass]="cls"> {{ message }} </div>`,
    styles: ['.message { border:1px solid; padding:5px; border-radius:5px;}']
})
export class CustomMessageComponent {

    @Input()
    message: string;
    @Input()
    cls: string;
    @Input("msv")
    myspecialvariable: number;


    constructor() {
        // this.message = "My Custom message";
    }

    ngOnInit() {
        console.log("msv", this.myspecialvariable);
        console.log(this.cls);
        // console.log(this.message);
    }
}