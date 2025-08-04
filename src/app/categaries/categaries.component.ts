import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-categaries',
  standalone: false,
  templateUrl: './categaries.component.html',
  styleUrl: './categaries.component.css'
})
export class CategariesComponent implements OnInit {
  name : string ="";
  data  = "Hello this is Ram More";
  address = "i am from solapur maharashtra"

  constructor(private service : ShareDataService){}

  ngOnInit(): void {
    this.service.Observable$.subscribe(resp=>{
      console.log("Parent Component data....",resp);
      this.name = resp;
    })
  }
}
