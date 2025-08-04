import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  standalone: false,
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.css'
})
export class DebounceComponent implements AfterViewInit, OnInit {
  @ViewChild('myInput') myInput !: ElementRef;
  data :string = "";
  fruits : string[] =['banana','apple','grapes','orange','water melon'];
  filteredData : string[] = [];

  tableHeadingList : string[] =['name','city','state','pincode']

  ngOnInit(): void {
    this.filteredData = this.fruits;
  }

  ngAfterViewInit(): void {
    fromEvent(this.myInput.nativeElement, "input").pipe(
      map((ele:any)=>ele.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe({
      next: (resp:any)=>{
        console.log(resp);
        this.data = resp;
        this.filteredData = this.fruits.filter(ele => ele.includes(resp));
        console.log(this.filteredData);
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
  }

}
