import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page-section',
  templateUrl: './landing-page-section.component.html',
  styleUrls: ['./landing-page-section.component.css']
})
export class LandingPageSectionComponent implements OnInit {
  @Input() section_ !:string
  constructor() { }

  ngOnInit(): void {
  }

}
