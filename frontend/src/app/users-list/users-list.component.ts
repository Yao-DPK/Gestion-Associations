import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


/*export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public age: number,
  ) {}
}
const users: User[] = [
  new User(0, 'John Doe', 'johndoe@gmail.com', 23),
  new User(1, 'Jane Doe', 'janedoe@gmail.com', 32),
]*/


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent implements OnInit{
  constructor(
    private http: HttpClient
  ){}
  ngOnInit(): void {
    const resquest: Observable<any> = this.http.get('http://backend:3000/users', { observe: 'response' });
    resquest.toPromise().then(response => this.dataSource = response.body);
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'age'];
  dataSource = [];
}
