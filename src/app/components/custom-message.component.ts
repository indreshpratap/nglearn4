import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";


@Component({
    selector: "app-custom-message",
    template: `<div class="message" [ngClass]="cls"> {{ message }} <button (click)="closeIt()">x</button> </div>`,
    styles: ['.message { border:1px solid; padding:5px; border-radius:5px;}']
})
export class CustomMessageComponent implements OnInit,OnDestroy{

    @Input()
    message: string;
    @Input()
    cls: string;
    @Input("msv")
    myspecialvariable: number;

    @Input()
    secureprop: any;

    @Output()
    sendRequest: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        // this.message = "My Custom message";
    }

    ngOnInit() {
        console.log("On init started");
        console.log("msv", this.myspecialvariable);
        console.log("secureprop", this.secureprop);
        // console.log(this.cls);
        // console.log(this.message);
        console.log("On init completed");
    }

    ngOnDestroy(){
        console.log("Component destroyed");
    }

    closeIt() {
        console.log("Sending close request for ", this.myspecialvariable);
        this.sendRequest.emit({ msv: this.myspecialvariable, message: "sending data" });
    }
}