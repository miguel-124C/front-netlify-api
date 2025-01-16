import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [ RouterOutlet ]
})
export class AppComponent implements OnInit {
  title = 'front-netlify-api';

  ngOnInit(): void {
  }

}
