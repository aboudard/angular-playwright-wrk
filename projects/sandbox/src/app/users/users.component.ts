import { Component, OnInit, TrackByFunction } from '@angular/core';
import { NgFor } from '@angular/common';

interface User {
  id: number;
  name: string;
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class UsersComponent implements OnInit {

  userList: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Doe' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  userId: TrackByFunction<User> = (index, user: User) => user.id;

}
