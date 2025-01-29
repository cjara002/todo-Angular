import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {
username = "in28minutes"
password=''
errorMessage = 'Invalid Credentials'
invalidLogin = false;

//Dependency Injection
constructor(private router: Router) {}

handleLogin() {
  //Always need to use this key word
  if(this.username === 'in28minutes' && this.password === 'dummy'){
    this.invalidLogin = false;
    //set route below
    this.router.navigate(['welcome']);
  } else{
    this.invalidLogin = true;
  }
}
}
