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

    setTimeout(
      () => {
        const XHR1 = new XMLHttpRequest();
        XHR1.responseType = 'blob';
        XHR1.open('GET', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/172905/test.pdf', true);
        XHR1.onload = function() {
          // debugger
          const data = this.response;

          const a = document.createElement('a');
          const url = window.URL.createObjectURL(data);
          a.href = url;
          a.download = 'myfile.pdf';
          document.body.append(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url);
        };
        XHR1.onerror = function() {
          console.log('Ошибка /' + this.status);
        };
        XHR1.send();
      },
      2000
    );
  }
}
