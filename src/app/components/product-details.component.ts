import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: "app-product-details",
    template: `
<div><pre>{{details|json}}</pre></div>
`

})
export class ProductDetailsComponent {
    @Input()
    id: any;

    details:any;

    url = "https://jsonplaceholder.typicode.com/posts";
    constructor(private http:Http) {
        console.log("Constructor ID",this.id);
    }

    ngOnInit(){
        console.log("Ng On Changes ID",this.id);
        this.http.get(this.url+"/"+this.id).subscribe(res=>{
            this.details = res.json();
        });
        
    }





}