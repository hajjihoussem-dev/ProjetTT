import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/model';
import { ContactService } from '../contact.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contacts: Contact[] = [];
  searchTerm: string = '';
  filteredContacts: Contact[] = [];
  constructor(private contactService: ContactService) {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    this.getContacts();
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

search() {
  // Filtrer les contacts en fonction du terme de recherche
  this.filteredContacts = this.contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
  deleteContact(id: number) {
    this.contactService.deleteContact(id)
      .subscribe(() => {
        console.log('Contact deleted successfully');
        this.getContacts();
      }, error => {
        console.error('Error deleting contact', error);
      });
  }
}
