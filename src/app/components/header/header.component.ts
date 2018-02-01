import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMe() {
    console.log('Btn1: Im working');
  }

  wrongPage() {
    console.log('Btn2: Im working');
  }

}
