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
    // Hardcoded for demonstration, replace with your actual authentication logic
    const hardcodedUsername = "john.doe@gmail.com";
    const hardcodedPassword = "0000";

    if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
      // Assuming login is successful
      const userData = {
        username: this.username,
        // You might want to avoid storing passwords in localStorage for security reasons
      };

      // Store user data in localStorage
      localStorage.setItem('UserData', JSON.stringify(userData));

      // Redirect to the home page
      this.router.navigateByUrl('/home');
    } else {
      // Handle invalid login
      console.log('Invalid username or password');
      // You might want to display an error message to the user
    }
  }
   // onSubmit1() {
    //  localStorage.setItem("Contact","['ameni','rommene']");
   //   this.router.navigateByUrl("/home");
      /*const contactData = ['azerty@gmail.com', '1234'];
      localStorage.setItem('contact', JSON.stringify(contactData));
    this.router.navigateByUrl("/home");*/
      //console.log('Login submitted:', this.username, this.password);
    //}
    /*login(): void {
      this.authService.authenticate(this.username, this.password)
        .subscribe(
          () => {
            // Authentification réussie, redirigez vers la page d'accueil ou une autre page
            this.router.navigate(['/home']);
          },
          error => {
            // Gestion des erreurs d'authentification
            console.error('Erreur d\'authentification:', error);
            this.errorMessage = 'Identifiants invalides';
          }
        );
    }*/

}
