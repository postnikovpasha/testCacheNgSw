import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-appNew';

  respText1;

  load() {
    console.log('Func: Load');
    const self = this;

    const XHR = new XMLHttpRequest();
    XHR.open('GET', 'https://api.github.com/events', true);
    XHR.onload = function() {
      self.respText1 = this.responseText;
    };
    XHR.onerror = function() {
      alert('Ошибка /' + this.status);
    };
    XHR.send();
  }
}
