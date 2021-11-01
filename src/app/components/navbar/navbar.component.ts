import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // variables
  show_xs_nav = false
  device !: boolean

  // css class
  nav_component_class = "grid grid-cols-2 md:flex md:flex-wrap md:justify-between w-full bg-primary py-2 px-2 text-white"
  nav_logo_class = "w-10 h-10 hidden md:block"
  navbar_list_class = "px-4 py-2 items-center caption"
  container_component = "px-4 md:px-12 lg:px-20 xl:px-24 2xl:px-32" 
  constructor() { }

  ngOnInit(): void {
    this.show_xs_nav = false
    this.device = Capacitor.isNativePlatform()
  }

  show_navbar_menu(){
    this.show_xs_nav = this.show_xs_nav == false ? true : false
  }
}
