import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  test: String;

  constructor() {
    this.test = "made";
  }

  ngOnInit() {
    this.test = "hello";
  }

}
