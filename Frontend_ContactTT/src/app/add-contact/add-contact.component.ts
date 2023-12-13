
import { Contact } from './../model/model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent  implements OnInit{
  con : Contact = new Contact();
  submitted = false;
  //monFormula!: FormGroup;
  constructor(private contactService:ContactService, private router:Router, private formBuilder: FormBuilder) { }
  ngOnInit(){
  }

 newContact(): void {
  this.submitted = false;
   this.con = new Contact();
  }

save() {
  this.contactService.addContact(this.con).subscribe(data => {
     console.log(data)
    this.con = new Contact();
    this.gotoList();},
    error => console.log(error));}


  onSubmit() {
  this.submitted = true;
  this.save();
  }
gotoList() {
  this.router.navigate(['/home/list-contact']);
  }
 addContact(){
  this.contactService.addContact(this.con).subscribe(()=> this.router.navigateByUrl("/home/list-contact"));
}
}
