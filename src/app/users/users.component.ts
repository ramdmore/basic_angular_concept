import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']  
})
export class UsersComponent implements OnInit {
  user!: { id: string, name: string };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    };

    this.activatedRoute.params.subscribe((params) => {
      this.user = {
        id: params['id'],
        name: params['name']
      };
    });

    this.activatedRoute.queryParams.subscribe((data: Params) => {
      console.log(data);
    });

    this.activatedRoute.fragment.subscribe((data: string | null) => {
      console.log(data);
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  getSnehaDetails() {
    this.router.navigate(['/users', '2', 'Sneha'], {
      queryParams: { page: 2, search: 'Ram' },
      fragment: 'refference book'
    });
  }
}
