import { Component } from '@angular/core';


@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html"
})
export class FooterComponent {

    links = [];

    count: number;

    flag = true;
    ngOnInit() {
        this.links = [{ name: 'home' }, { name: "aboutus" }, { name: "share" }, { name: "contactus" }];
        var count = 1;
        setInterval(() => {
            this.links.push({ name: "new link " + count++ });
        }, 1000);
    }

    removeLink(indx) {
        this.links.splice(indx, 1);
    }
}