import { Component, inject } from '@angular/core';
import { environments } from './../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  private router = inject(Router)

  public signIn(){
    const { URLAUTHORIZE, CLIENT_ID, REDIRECT_URI } = environments;
    const url = `${URLAUTHORIZE}?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    window.location.assign(url);
  }

}