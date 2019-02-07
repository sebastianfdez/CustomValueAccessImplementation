import { Component } from '@angular/core';

export interface Nav {
  link: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navs: Nav[] = [
    {
      link: '/pizza/reactive',
      name: 'Reactive',
    },
    {
      link: '/pizza/template',
      name: 'Template',
    },
  ];
}
