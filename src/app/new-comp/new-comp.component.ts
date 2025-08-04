import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  standalone: false,
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent implements OnInit {
  gridItems = Array(9).fill(false);
  activeData: number | null = null;

  constructor() {

  }

  ngOnInit(): void {
    const storedData = localStorage.getItem('selectedColor');
    if (storedData !== null) {
      this.activeData = +storedData;
      this.gridItems[this.activeData] = true;  // Mark the stored index as active
    }
  }

  onClick(index: number) {
    this.activeData = index;
    this.gridItems = Array(9).fill(false);
    this.gridItems[index] = true;
    localStorage.setItem('selectedColor', index.toString());
  }


}
