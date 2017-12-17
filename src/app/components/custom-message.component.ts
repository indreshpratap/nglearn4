import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";


@Component({
    selector: "app-custom-message",
    template: `<div class="message" [ngClass]="cls"> {{ message }} <button (click)="closeIt()">x</button> </div>`,
    styles: ['.message { border:1px solid; padding:5px; border-radius:5px;}']
})
export class CustomMessageComponent implements OnInit, OnDestroy {

    @Input()
    message: string;
    @Input()
    cls: string;
    @Input("msv")
    myspecialvariable: number;
    @Input()
    delay: number;

    secureprop: any;

    @Output()
    onClose: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onLoaded: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        // this.message = "My Custom message";
    }

    ngOnInit() {
        console.log("Custom message On init started");
        console.log("msv", this.myspecialvariable);
        console.log("secureprop", this.secureprop);
        // console.log(this.cls);
        // console.log(this.message);
        console.log("On init completed");
        this.onLoaded.emit("Custom message component loaded");
        if (this.delay) {
            setTimeout(() => {
                this.closeIt();
            }, this.delay);
        }
    }

    ngOnDestroy() {
        console.log("Custom message Component destroyed");
    }

    closeIt() {
        console.log("Sending close request for ", this.myspecialvariable);
        this.onClose.emit({ msv: this.myspecialvariable, message: "sending data" });
    }
}