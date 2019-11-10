/*
* Copyright © 2018. VMware, Inc. All Rights Reserved.
*
* This product is protected by copyright and intellectual property laws in the United States and
* other countries as well as by international treaties.
* VMware products may be covered by one or more patents listed at http://www.vmware.com/go/patents.
*/

import { Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const userRoutes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: 'edit-user/:id', component: CreateUserComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: '**', component: PageNotFoundComponent }
];
