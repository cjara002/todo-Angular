import { Injectable } from '@angular/core';

// injectible make this a service
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    
    if(username === 'in28minutes' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      return true
    }

    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
}
