import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../services/post.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-api-data',
  standalone: false,
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css'
})
export class ApiDataComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostData().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // Custom filter logic (search by title + body)
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          const combined = (data.title + ' ' + data.body).toLowerCase();
          return combined.includes(filter.trim().toLowerCase());
        };
      },
      error: (err) => console.error(err)
    });
  }

 applyFilter(event: any) {
  const filterValue = event.target.value;
  this.dataSource.filter = filterValue.trim().toLowerCase(); // more accurate
}

}
