import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  constructor(private location: Location, private toastr: ToastrService, private route: ActivatedRoute,
              private router: Router, private blogHttpService: BlogHttpService) { }

  ngOnInit() {

    const myBlogId = this.route.snapshot.paramMap.get('blogId');

    // this.blogHttpService.getSingleBlogInfo(myBlogId);

    this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(
      data  =>  {
        this.currentBlog = data.data;
      },

      error => {
        console.log(error.statusText);
        this.toastr.error(error.statusText);
      });

  }
  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        this.toastr.success('Blog deleted successfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        });
      },
      error => {
        this.toastr.error('Some Error Occurd', 'Error');
      });
  }

  public goBackToPreviousPage(): any {
      this.location.back();
  }
}
