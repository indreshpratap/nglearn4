import { Component } from "@angular/core";

@Component({
    selector: "app-structural",
    templateUrl: "./structrural.component.html"
})
export class StructuralComponent {

    flag: boolean = false;
    prefix = "mymenu_";
    counter = 0;
    myhtml;
    generatedId: string = "";
    type = 0;

    colors: Array<string>;

    msgs:any;

    constructor() {
        // this.changeId();
        this.msgs = {
            "info":"This is info message",
            "warning":"This is warning message",
            "success" :"this is success message",
            "nomsg":"No message defined!"

        }

        this.colors = [
            "Red",
            "Green",
            "Blue",
            "White"
        ];
        this.autoPushColors();
        this.autoSwithType();
    }

    toggleFlag() {
        this.flag = !this.flag;
    }

    changeId() {
        this.generatedId = this.prefix + (++this.counter);
    }

    processTemplate() {
        var html = "<div><h3>Hello</h3>";
        if (this.flag) {
            html += '<div id="' + this.generatedId + '"><ul><li></li></ul></div>'
        }
        html += "</div>";

        this.myhtml = html;

    }

    autoPushColors() {
        setTimeout(() => {
            this.colors.push("Pink");
        }, 3000);
        setTimeout(() => {
            this.colors.push("Voilet");
        }, 5000)
    }

    removeItem(index) {
        this.colors.splice(index, 1);
    }

    autoSwithType() {
        let interval = setInterval(() => {
            ++this.type;
            if (this.type > 4) {
               this.type=0;
            }
        }, 3000);
    }

}