import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public abouteMessage = 'This is a simple Blog application to post blogs.';

  constructor() { }

  ngOnInit() {
  }

}
