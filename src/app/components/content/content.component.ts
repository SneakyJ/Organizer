import { Component, Input,Output, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersInDatabaseService } from '../../services/users-in-database.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  users: User[] = [];
  @Input()
  @Output() id: number = 0;

  constructor(private UsersInDatabaseService: UsersInDatabaseService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  setId(event: any) {
    this.id = event.target.value;
  }

  getUsers(): void {
    this.UsersInDatabaseService.getUsers()
    .subscribe(users => this.users = users);
  }

  deleteUser(id: number): void {
    this.UsersInDatabaseService.deleteUser(id)
    .subscribe();
  }

}
