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
  message?:string;
    constructor(private cs:ContactService,private router:Router ) { }

    ngOnInit(): void {
      this.contact = this.cs.getContactById(this.contact);
 //this.cs.getContactById(this.route.snapshot.paramMap.get('id')).subscribe(data => this.contact=data)
    }

    updateContact(): void {
      console.table(this.contact);
      this.cs.updateContact(this.contact)
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
