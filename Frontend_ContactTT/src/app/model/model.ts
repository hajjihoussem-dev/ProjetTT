export class Contact {
   id: number ;
   firstName: string;
   lastName: string;
   age: number;
   phone: string;
   mail:string;
   address: string;
   city: string;
   //zipCode?:number;
  job:string;



  constructor() {
    this.id= 0,
    this.firstName = "",
    this.lastName = "",
    this.age = 0
    this.phone = '',
    this.mail='',
    this.address='',
    this.city='',
    this.job=''

  }
}
