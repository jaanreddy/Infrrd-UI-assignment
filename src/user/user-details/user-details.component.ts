import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
          this.user = userData.filter(user => user.id === params.id);
        }
      }
    });
  }
  userListPage() {
    this.router.navigate(['users']);
  }

}
