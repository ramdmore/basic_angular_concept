import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  logInForm !: FormGroup;

  users = [
    { email:'admin@test.com', password : "123456"},
    { email:'staff@test.com', password : "123456"},
    { email:'customer@test.com', password : "123456"},
  ]

  constructor(private fb: FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: this.fb.control('', [Validators.required,Validators.email]),
      password: this.fb.control("", [Validators.required,Validators.minLength(6)])
    })
  }

  getEmail() {
    return this.logInForm.get('email');
  }

  getPassword() {
    return this.logInForm.get('password')
  }

  onSave(){
    // console.log(this.logInForm.value);
    const { email, password }= this.logInForm.value;
    const user = this.users.find(ele => ele.email === email && ele.password === password);

    if(user){
      this.router.navigate(['data'])
    }else{
      alert('you are an unathorized user')
    }
  }

}
