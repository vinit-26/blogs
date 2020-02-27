import { Component, OnInit } from '@angular/core';

import { BlogHttpService } from '../blog-http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];

  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute, private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
     const myBlogId = this.route.snapshot.paramMap.get('blogId');

     this.blogHttpService.getSingleBlogInfo(myBlogId).subscribe(

      data => {
        this.currentBlog = data.data;
      },
      error => {
        console.log(error);
        this.toastr.error('Some error occured', 'Error');
      });
  }

  public editThisBlog(): any {
      console.log(this.currentBlog);
      this.blogHttpService.editBlog(this.currentBlog.myblogId, this.currentBlog).subscribe(

        data => {
          this.toastr.success('Blog Edited Successfully', 'Success');
          setTimeout(() => {
            this.router.navigate(['/blog', this.currentBlog.blogId]);
          }, 1000);
        },
        error => {
          this.toastr.error('Some Error Occurd', 'Error');
        });
  }
}







