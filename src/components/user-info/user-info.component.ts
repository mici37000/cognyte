import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo!: User;

  constructor() {}

  ngOnInit(): void {}
}
