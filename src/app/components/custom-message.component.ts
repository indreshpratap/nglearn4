import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges, DoCheck, AfterViewInit } from "@angular/core";


@Component({
    selector: "app-custom-message",
    template: `<div class="message" [ngClass]="cls"> {{ message }} {{myspecialvariable.specialvalue}}<button (click)="closeIt()">x</button> </div>`,
    styles: ['.message { border:1px solid; padding:5px; border-radius:5px;}']
})
export class CustomMessageComponent implements OnInit, OnDestroy, OnChanges,DoCheck,AfterViewInit {
    
    


    @Input()
    message: string;
    @Input()
    cls: string;
    @Input("msv")
    myspecialvariable: any;
    @Input()
    delay: number;

    secureprop: any;

    @Output()
    onClose: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onLoaded: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        // this.message = "My Custom message";
        console.log("Constructor called");
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
    ngAfterViewInit(): void {
        console.log("After view init");
    }
    ngAfterViewChecked(): void {
        console.log("After view Checked");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("Ng On changes", changes);
        let msgProp = changes.message;
        if (msgProp) {
            console.log("Yes we have received the message property value", msgProp.currentValue);
        }
        let ms = changes.myspecialvariable;
        if (ms) {
            console.log("Recieved an object");
            this.myspecialvariable = Object.assign({}, ms.currentValue);
        }
    }

    ngDoCheck() {
        console.log("Do check is running");
       
    }

    ngOnDestroy() {
        console.log("Custom message Component destroyed");
    }

    closeIt() {
        console.log("Sending close request for ", this.myspecialvariable);
        this.onClose.emit({ msv: this.myspecialvariable, message: "sending data" });
    }
}