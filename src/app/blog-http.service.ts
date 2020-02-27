import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs';

import {catchError} from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {


  public allBlogs;
  public currentBlog;
  // public url = 'https://blogapp.edwisor.com/api/v1/blogs';
  public url = 'https://blogsimpl.herokuapp.com/api/v1/blogs';
  // public url = 'http://localhost:3330/api/v1/blogs';
  // public authToken = `YzdhNDNlMzAwZjIxZjBkZTA2OWMwZjgwNjYyMzkzODQxYzk5OTBjNW
  // FjNjc0ODlkNDNjN2U1OGJhNDNmNzZiNWVmODA4NWJjMDRjOTNjNTk4YTk5ODE4ZDZjOGQwNDI5MjdjNTF
  // mMmQxNmViY2MwMmYzM2YyYzJmYjUyYTY5ZjY0Nw==`;

  constructor(private http: HttpClient) { }

  public getAllBlogs(): any {

      const myResponse = this.http.get(`${this.url}/all`);

      return myResponse;

  }

  public getSingleBlogInfo(currentBlogId): any {

      // let myResponse = this.http.get(this.url+'/view'+'/'+currentBlogId+'?authToken='+this.authToken);
      const myResponse = this.http.get(this.url + '/view' + '/' + currentBlogId);
      return myResponse;
  }

  public createBlog(blogData): any {

    // let myResponse = this.http.post(this.url+'/create/'+'?authToken='+this.authToken, blogData);

    const myResponse = this.http.post(this.url + '/create', blogData);


    return myResponse;
  }

    public deleteBlog(blogId): any {
      const data = {};

      const myResponse = this.http.post(this.url + '/' + blogId + '/delete', data);
      // let myResponse = this.http.post(this.url+'/'+blogId+'/delete'+'?authtoken='+this.authToken, data);

      return myResponse;
    }

    public editBlog(blogId, blogData): any {

      // let myResponse = this.http.put(this.url+'/'+blogId+'/edit'+'?authToken='+this.authToken, blogData);
    const myResponse = this.http.put(this.url + '/' + blogId + '/edit', blogData);

    return myResponse;
    }





}
