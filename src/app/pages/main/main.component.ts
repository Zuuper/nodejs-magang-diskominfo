import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  device = false

  // Css Classes Start here
  regular = ""
  mobile_nav = "absolute inset-x-0 bottom-0"
  mobile_footer = "hidden"
  // Css Classes End Here  
  constructor() { }

  ngOnInit(): void {
    this.device = Capacitor.isNativePlatform()
  }

}
