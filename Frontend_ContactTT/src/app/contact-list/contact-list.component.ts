import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/model';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe((data: Contact[]) => {
        this.contacts = data;
      });
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id)
      .subscribe(() => {
        console.log('Contact deleted successfully');
        this.getContacts(); // Rafraîchir la liste après la suppression
      }, error => {
        console.error('Error deleting contact', error);
        // Gérer les erreurs (afficher un message d'erreur, etc.)
      });
  }

}
