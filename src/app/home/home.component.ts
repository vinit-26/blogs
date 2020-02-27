import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs = [];

  constructor(public blogHttpService: BlogHttpService, private toastr: ToastrService) {

   }

  ngOnInit() {
    this.blogHttpService.getAllBlogs().subscribe(
      data => {
        this.allBlogs = data.data;
        console.log(data);
      },
      error => {
        console.log(error.statusText);
        this.toastr.error(error.statusText);
      });
  }
}
