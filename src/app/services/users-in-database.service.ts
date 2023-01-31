import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersInDatabaseService {

  private apiUrl = "http://localhost:5010/api/UserEntities";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>  {
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<User> {
    const deletUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<User>(deletUrl, this.httpOptions);
  }
}


