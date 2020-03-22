import { Component } from '@angular/core';
import {NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbButtonsModule]
})
export class AppComponent {

  constructor(
  ) {}

  title = 'quarenteners';
}
