import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/model';
import { ContactService } from '../contact.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contacts: Contact[] = [];
  allContacts: Contact[] = [];
  searchTerm: string = '';
  constructor(private router:Router, private contactService: ContactService) {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    this.getContacts();
    this.loadContacts();
  }

   getContacts():void {
    this.contactService.getContacts()
      .subscribe((data: Contact[]) => {
        this.contacts = data;
      },
      (error:HttpErrorResponse) =>{
        alert(error.message);
      });
  }

  loadContacts() {
    this.contactService.getContacts().subscribe(data => {
      this.allContacts=data;
      this.contacts = data;
      this.applySearchFilter();
    });
  }

  applySearchFilter() {
    this.contacts = this.allContacts.filter(contact =>
      contact.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  clearSearch() {
    this.searchTerm = '';
    this.applySearchFilter();
  }
  deleteContact(id: number) {
    const confirmation = window.confirm('Are you sure you want to delete this contact?');
if(confirmation){
  this.contactService.deleteContact(id)
      .subscribe(() => {
        console.log('Contact deleted successfully');
        this.getContacts();
      }, error => {
        console.error('Error deleting contact', error);
      });
}

  }
  getContactById(id: number) {
    this.router.navigate(['detail-contact', id]);
  }

}
