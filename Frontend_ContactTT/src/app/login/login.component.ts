import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string=''
password:string=''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(): void {
    const hardcodedUsername = "john.doe@gmail.com";
    const hardcodedPassword = "0000";

    if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
      // Assuming login is successful
      const userData = {
        username: this.username,
      };

      // Store user data in localStorage
      localStorage.setItem('UserData', JSON.stringify(userData));

      // Redirect to the home page
      this.router.navigateByUrl('/home');
    } else {
      // Handle invalid login
      console.log('Invalid username or password');
    }
  }


}
