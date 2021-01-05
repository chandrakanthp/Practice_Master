import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  // Implement addContacts method using HttpClient for a saving a Contacts details
  addContact(contact): Observable<any> {
    return this.http.post(environment.API, {
      name: contact.name,
      mobile: contact.mobile
    }, httpOptions);
  }

  // Implement getAllContactss method using HttpClient for getting all Contacts details
  getAllContacts(): Observable<any> {
    return this.http.get(environment.API);
  }
}
