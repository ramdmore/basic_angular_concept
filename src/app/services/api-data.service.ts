import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiDataService {
  private baseUrl = 'https://api.github.com/repositories/1300192/issues';

  constructor(private http: HttpClient) {}

  getIssues(page: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?page=${page}`);
  }

  getUserDetails(username: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${username}`);
  }
}
