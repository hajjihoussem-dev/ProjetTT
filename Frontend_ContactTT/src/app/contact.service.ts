import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { Contact } from './model/model';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = "http://localhost:8080/contacts";
  constructor(private http: HttpClient) { }

    getContacts(): Observable<Contact[]> {
      return this.http.get<Contact[]>(this.apiUrl);
    }

    getContactById(id: number): Observable<Contact> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Contact>(url);
    }

    addContact(contact: Contact): Observable<Contact> {
      return this.http.post<Contact>( "http://localhost:8080/contacts", contact);
    }

    updateContact(contact: Contact): Observable<Contact> {
      const url = `${this.apiUrl}/${contact.id}`;
      return this.http.put<Contact>(url, contact);
    }

    deleteContact(id: number): Observable<Contact> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete<Contact>(url);
    }
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
  return !!authToken; // Renvoie true si un token(jeton) est present, sinon false
}


logout(): void {
  // Supprimez les informations d'authentification (par exemple, le jeton) du stockage local
  localStorage.removeItem('authToken');
}
}
