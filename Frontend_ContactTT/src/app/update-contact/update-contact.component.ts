import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contact:any;
  message?:string;
    constructor(private cs:ContactService, private route:ActivatedRoute, private router:Router ) { }

    ngOnInit(): void {
 const idParam = this.route.snapshot.paramMap.get('id');


 if (idParam !== null) {
   const idToUpdate = +idParam;

   this.cs.getContactById(idToUpdate).subscribe(
     data => this.contact = data,
     error => console.error('Erreur lors de la récupération du contact :', error)
   );
 } else {
   console.error('L\'ID n\'est pas présent dans l\'URL.');
 }
    }
    updateContact(): void {
      console.table(this.contact);
      this.cs.addContact(this.contact)
        .subscribe(  response => {
            console.log(response);
            this.message = 'The tutorial was updated successfully!';
            alert(this.message);
            this.router.navigate(['/home/list-contact']);
          },
          error => {
            console.log(error);
          });
    }}
