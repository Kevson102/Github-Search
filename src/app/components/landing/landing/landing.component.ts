import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  users:User[] = [
    new User(new Date(2021,10,17)),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
