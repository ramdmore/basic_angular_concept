import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   myApi = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http : HttpClient) { }

  getPostData() : Observable<any[]>{
    return this.http.get<any[]>(this.myApi)
  }
}
