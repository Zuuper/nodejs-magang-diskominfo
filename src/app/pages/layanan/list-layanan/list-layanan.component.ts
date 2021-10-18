import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-layanan',
  templateUrl: './list-layanan.component.html',
  styleUrls: ['./list-layanan.component.css']
})
export class ListLayananComponent implements OnInit {

  // Start Css Classes
  container_component = "px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32"
  // Endc Css Classes
  constructor() { }

  ngOnInit(): void {
  }

}
