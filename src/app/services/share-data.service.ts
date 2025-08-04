import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  Observable$ = new BehaviorSubject("")
  constructor() { }

  sendData(data:any){
    return this.Observable$.next(data);
  }
}
