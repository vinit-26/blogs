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
  public watingString = 'Please Wait...';

  constructor(public blogHttpService: BlogHttpService, private toastr: ToastrService) {

   }

  ngOnInit() {
    this.blogHttpService.getAllBlogs().subscribe(
      data => {
        if (data.status !== 404) {
          this.allBlogs = data.data;
        } else {
          this.watingString = data.message;
        }
      },
      error => {
        this.watingString = 'Error: ' +  error.message;
        this.toastr.error(error.statusText);
      });
  }
}
