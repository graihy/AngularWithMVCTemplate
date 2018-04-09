import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>`,
})
export class AppComponent  { name = 'This text is rendered from inside an Angular component! '; }
