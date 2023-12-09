import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contact:any;
  message:string | undefined;
    constructor(private cs:ContactService, private route: ActivatedRoute,private router:Router ) { }

    ngOnInit(): void {
 //  this.cs.getContactById(this.route.snapshot.paramMap.get("id")).subscribe(data => this.contact=data)
    }
    updateUserById(): void {
      console.table(this.contact);
      this.cs.addContact(this.contact)
        .subscribe(  response => {
            console.log(response);
            this.message = 'The tutorial was updated successfully!';
            alert(this.message);
            this.router.navigate(['/home/listcontact']);
          },
          error => {
            console.log(error);
          });
    }}
