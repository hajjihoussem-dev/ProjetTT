export class Contact {
   id: number ;
   firstName: string;
   lastName: string;
   age?: number;
   phone: string;
   mail:string;
   address: string;
   city: string;
  job:string;



  constructor() {
    this.id= 0,
    this.firstName = "",
    this.lastName = "",
    this.phone = '',
    this.mail='',
    this.address='',
    this.city='',
    this.job=''

  }
}
