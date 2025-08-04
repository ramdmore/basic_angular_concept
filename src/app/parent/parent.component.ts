import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ShareDataService } from '../services/share-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  name : string = "Ram More";
  myform !:FormGroup;
 
  constructor(private service : ShareDataService, private fb : FormBuilder){}

  ngOnInit(): void {
    this.myform = this.fb.group({
      email : this.fb.control('',[Validators.required, Validators.email]),
      password : this.fb.control('',[Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    console.log(this.myform.value);
    this.myform.reset();
    
  }

  email(){
    return this.myform.get('email')
  }

  password(){
    return this.myform.get('password')
  }

  sendData(){
    this.service.sendData(this.name)
  }
  
  
}
