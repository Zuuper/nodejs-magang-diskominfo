import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // css class
  navbar_list_class = "px-4 py-2 items-center caption" 
  constructor() { }

  ngOnInit(): void {
  }

}
