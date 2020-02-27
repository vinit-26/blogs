import { Component, OnInit } from '@angular/core';

import { BlogHttpService} from '../blog-http.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private router: Router,
              private toastr: ToastrService) {   }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public author: string;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];

  ngOnInit() {

    }

    public createBlog(): any {

      const blogData = {
        title: this.blogTitle,
        description: this.blogDescription,
        blogBody: this.blogBodyHtml,
        category: this.blogCategory,
        fullName: this.author
      };
      this.blogHttpService.createBlog(blogData).subscribe(

            data => {
              this.toastr.success('Blog Posted Successfully', 'Success');
              setTimeout(() => {
                this.router.navigate(['/blog', data.data.blogId]);
              }, 1000 );
            },
            error => {
              this.toastr.error(error.statusText);
    });
  }
}
