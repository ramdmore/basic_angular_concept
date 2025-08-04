import { Component, OnInit } from '@angular/core';
// import { ApiDataService } from '../services/api-data.service';
import { Router } from '@angular/router';
import { ApiDataService } from '../services/api-data.service';

@Component({
  selector: 'app-handle-data',
  standalone: false,
  templateUrl: './handle-data.component.html',
  styleUrl: './handle-data.component.css'
})
export class HandleDataComponent implements OnInit {
  apiDatas: any[] = [];
  currentPage = 1;

  selectedIssue: any = null;
  userDetails: any = null;

  constructor(private githubApi: ApiDataService) {}

  ngOnInit() {
    this.loadIssues();
  }

  loadIssues() {
    this.githubApi.getIssues(this.currentPage).subscribe((data:any) => {
      this.apiDatas = data;
      this.selectedIssue = null;
      this.userDetails = null;
    });
  }

  nextPage() {
    this.currentPage++;
    this.loadIssues();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadIssues();
    }
  }

  toggleCard(issue: any) {
    if (this.selectedIssue && this.selectedIssue.id === issue.id) {
      this.selectedIssue = null;
      this.userDetails = null;
    } else {
      this.selectedIssue = issue;
      this.githubApi.getUserDetails(issue.user.login).subscribe((user:any) => {
        this.userDetails = user;
      });
    }
  }
}
