import { Component, OnInit } from '@angular/core';
import { ApidatasService } from '../services/apidatas.service';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit{
  users: any[] = [];
 
  constructor( private httpService: ApidatasService){}

  ngOnInit(): void {
    this.httpService.getUsers().subscribe({
      next:(resp:any)=>{
        console.log(resp);
        this.users = resp;
      },
      error:(_err:any)=>{
        console.log(_err)
      }
    })
  }


}
