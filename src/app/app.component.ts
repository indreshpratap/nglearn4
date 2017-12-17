import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message;

  ngOnInit() {
    this.message = "Your data saved successfully";
  }

  closeit(data) {
    console.log("Received request for closing the note");
    this.message = null;
  }

  onMsgLoaded(data){
    console.log("Received On loaded event");
    console.log(data);
  }

  doSave() {
    this.message = "Form submitted successfully:)";
  }








}
