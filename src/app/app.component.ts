import { Component } from '@angular/core';

import { svgIcons } from './svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public svgIcons = svgIcons;
}
