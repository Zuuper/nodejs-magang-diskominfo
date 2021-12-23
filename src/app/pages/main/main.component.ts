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
  mobile_nav = "fixed inset-x-0 bottom-0 mt-4 bg-white"
  mobile_footer = "hidden"
  article_mobile = "mb-8"
  // Css Classes End Here  
  constructor() { }

  ngOnInit(): void {
    let access_token : any = localStorage.getItem('access_token')
    access_token = (access_token !== null) ? JSON.parse(access_token) : 0
    if(access_token !== 0){
      const now = new Date()
      if(now.getTime() > access_token['expiry']){
        localStorage.removeItem('access_token')
      }
    }
    this.device = Capacitor.isNativePlatform()
  }

}
