import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-user',
  templateUrl: './main-user.component.html',
  styleUrls: ['./main-user.component.css']
})
export class MainUserComponent implements OnInit {

  container_component = "px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32"

  constructor() { }

  ngOnInit(): void {
  }

}
