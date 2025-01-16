import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  public saveToken( accessToken: string){
    localStorage.setItem('token', accessToken);
  }

  public getToken(){
    localStorage.getItem('token');
  }

}