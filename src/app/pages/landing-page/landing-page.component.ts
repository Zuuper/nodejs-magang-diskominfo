import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // Css Class
  hero_component_class = "mb-20 bg-gradient-to-tr from-primary to-secondary md:bg-none px-6 md:px-16"
  left_side_hero_child_component_class = "hidden md:block"
  right_side_hero_child_component_class = "md:hidden pt-8"
  container_component = "px-6 md:px-16"
  constructor() { }

  ngOnInit(): void {
  }

}
