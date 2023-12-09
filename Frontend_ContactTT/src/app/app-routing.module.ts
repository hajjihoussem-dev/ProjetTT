import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddContactComponent } from './add-contact/add-contact.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  {path:"login", component:LoginComponent}, //path login cad me charger le component login
 {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"home", component: HomeComponent, children:[
  {path:"list-contact", component: ContactListComponent},
  {path:"add-contact", component: AddContactComponent}
] ,
},
{path:"update-contact/:id", component:UpdateContactComponent},
{path:"**", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
