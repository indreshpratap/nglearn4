import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Thank you for your subscription:)';
  news = "Trending news";
  name = "Indresh Singh";
  msgcls = "red";

  classesSet = {
    "bold":false,
    "italic":false
  };

  classesArray = [
    "yellow",
    "bold",
    "italic"

  ];

  changeColor(cls) {
    this.msgcls = cls;
  }

  showAlert() {
    window.alert("Hi All");
  }

  showByName(name:string){
    window.alert("Hi, "+ name);
  }
  captureEvent(event) {
    console.log(event);
  }

  ctrlClick(event) {
    if(event.ctrlKey){
      window.alert("Showing only if ctrl key pressed: "+event.ctrlKey);
    }
  }









}
