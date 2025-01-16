import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private activatedRoute = inject(ActivatedRoute)

  constructor(){
    this.activatedRoute.fragment.subscribe({
      next: hash =>{
        if (!hash) throw new Error('No tiene hash la URL')
        const hashUrl = hash?.split('&');

        hashUrl.forEach(h =>{
          const token = h.split('=');
          if (token.at(0) == 'access_token') {
            console.log({token: token.at(1)})
          }
        })
      }
    });
  }

}
