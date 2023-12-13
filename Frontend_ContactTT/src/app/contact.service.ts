import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { Contact } from './model/model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
   //apiUrl = "http://localhost:8080/contact";
  constructor(private http:HttpClient) { }

   getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>("http://localhost:8081/contact/getAllContact");
  }

      deleteContact(id: number) {
        return this.http.delete("http://localhost:8081/contact/deleteContact/"+id);
      }
 addContact(contact:Contact): Observable<Contact>{
  return this.http.post<Contact>("http://localhost:8081/contact/addContact", contact);
  }

 /*   updateContact(id:number) {
    return this.http.put<Contact>("http://localhost:8081/contact/updateContact/" ,+id);
  } */
  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>("http://localhost:8081/contact/updateContact", contact);
  }
  getContactById(id: number){
    return this.http.get("http://localhost:8081/contact/getContact" +id);
  }
    /*

    updateContact(contact: Contact): Observable<Contact> {
      const url = `${this.apiUrl}/${contact.id}`;
      return this.http.put<Contact>(url, contact);
    }
*/
    authenticate(username: string, password: string): Observable<boolean> {
      const isValid = this.validateCredentials(username, password);

      if (isValid) {

        localStorage.setItem('authToken', 'notre token');
        return of(true);
      } else {
        return of(false);
      }

}
private validateCredentials(username: string, password: string): boolean {

  return username === 'user' && password === 'password';
}


isAuthenticated(): boolean {
  const authToken = localStorage.getItem('authToken');
  return !!authToken; // return true si un token est present, sinon false
}


logout(): void {
  // delete les information d'authentication (par example, le token) du stocked local
  localStorage.removeItem('authToken');
}

}
