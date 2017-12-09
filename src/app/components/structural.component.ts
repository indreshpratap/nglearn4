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
    type = 2;

    colors: Array<string>;

    constructor() {
        // this.changeId();

        this.colors = [
            "Red",
            "Green",
            "Blue",
            "White"
        ];
        this.autoPushColors();
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
        this.colors.splice(index,1);
    }

}