import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit{
  @ViewChild('myInput') myinput !: ElementRef;
  showData : any = "";
  cources : any[] =["Java","JavaScript","HTML","CSS","Angular","React","MySQL"];
  filteredData !: any[];

  ngOnInit(): void {
    this.filteredData = this.cources
  }

  ngAfterViewInit(): void {
    fromEvent(this.myinput.nativeElement, "input").pipe(
      map((ele:any)=>ele.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(data=>{
      console.log(data);
      this.showData = data;
      this.filteredData = this.cources.filter(cource => cource.toLowerCase().includes(data.toLowerCase()));


    })
  }

}
