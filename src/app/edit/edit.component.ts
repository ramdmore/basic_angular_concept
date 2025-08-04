import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../services/guards/deactivate-guard.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements CanComponentDeactivate {


  constructor() { }

  canDeactivate(): boolean {
    return confirm('Are you sure you want to leave this page? Any unsaved changes will be lost.');
  }
}
