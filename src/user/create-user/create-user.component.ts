import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';
import uuid from 'uuid';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  userList: User[] = [];
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
    this.createUserForm(this.user && this.user[0]);
  }

  createUserForm(user: User) {
    const uname = user && user.uname || '';
    const companyName = user && user.companyName || '';
    const emailID = user && user.emailID || '';
    const contactNumber = user && user.contactNumber || '';
    const designation = user && user.designation || '';
    this.userForm = new FormGroup({
      uname: new FormControl(uname, [Validators.required]),
      companyName: new FormControl(companyName, [Validators.required]),
      emailID: new FormControl(emailID, [Validators.required]),
      contactNumber: new FormControl(contactNumber, [Validators.required]),
      designation: new FormControl(designation, [Validators.required]),
    });
  }
  addUser() {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      this.userList = userData;
    }
    const user = this.extractFromUserForm();
    user.id = uuid.v4();
    this.userList.push(user);
    localStorage.setItem('user', JSON.stringify(this.userList));
    this.router.navigate(['users']);
  }
  cancelAddUser() {
    this.router.navigate(['users']);
  }
  extractFromUserForm() {
    return new User(
      null,
      this.userForm.value['uname'],
      this.userForm.value['companyName'],
      this.userForm.value['emailID'],
      this.userForm.value['contactNumber'],
      this.userForm.value['designation']
    );
  }
}
