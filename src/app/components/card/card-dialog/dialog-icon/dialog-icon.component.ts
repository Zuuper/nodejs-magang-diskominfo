import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-icon',
  templateUrl: './dialog-icon.component.html',
  styleUrls: ['./dialog-icon.component.css']
})
export class DialogIconComponent implements OnInit {
  @Input() icon = ""
  constructor() { }

  ngOnInit(): void {
  }

}
