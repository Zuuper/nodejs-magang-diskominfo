import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-masuk',
  templateUrl: './masuk.component.html',
  styleUrls: ['./masuk.component.css']
})
export class MasukComponent implements OnInit {

  // CSS Class 
  main_component_class = "grid grid-cols-1 background-main \
                      md:bg-none md:grid-cols-2 h-full"
  left_side_component_class = "md:pl-12 md:pt-8 bg-none md:bg-main-pattern bg-no-repeat bg-cover"
  left_side_title_component_class = "hidden md:block text-white"
  right_side_component_class = "bg-white px-4 py-4 md:px-16 md:my-auto rounded-t-2xl md:rounded-none"
  device = false
  constructor() { }

  ngOnInit(): void {
    this.device = Capacitor.isNativePlatform()
    console.log(this.device)
  }

}
