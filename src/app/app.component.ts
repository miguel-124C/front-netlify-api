import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'front-netlify-api';

  hash = document.location.hash;

  ngOnInit(): void {
    console.log(this.hash)
  }

}
