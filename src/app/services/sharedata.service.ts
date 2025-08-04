import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  num :any[] = [1,2,3,4,5];

  obs$ = new BehaviorSubject(this.num)

  constructor(private http: HttpClient) { }

  getData(){
    return this.obs$.next(this.num);
  }

  
}
