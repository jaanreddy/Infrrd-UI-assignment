import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[];
  constructor(private router: Router) { }

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      this.userList = userData;
    }
  }

  createUser() {
    this.router.navigate(['create-user']);
  }

  editUser(id: string) {
    this.router.navigate(['/', 'edit-user', id]);
  }
  userDetails(id: string) {
    this.router.navigate(['/', 'user-details', id]);
  }

  deleteUser(index: number, uname: string) {
    if (confirm(`Are you sure wanna remove this user : ${uname}`)) {
      this.userList.splice(index, 1);
      localStorage.setItem('user', JSON.stringify(this.userList));
      window.location.reload();
    }
  }

}
