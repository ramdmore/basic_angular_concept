import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  standalone: false,
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent {
  @Input() colArray : string[] = [];

  @Input() gridData  : any[] = [];

}
