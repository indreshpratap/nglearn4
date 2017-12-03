import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '<b>Thank you for your subscription:)</b>';
  news = "Trending news";
  name="Indresh Singh";
  msgcls  = "red";

  changeColor(cls) {
    this.msgcls = cls;
  }
}
