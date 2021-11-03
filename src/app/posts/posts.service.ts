import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<{ message: String, posts: Post[] }>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  setPost(post: Post) {
    this.http.post<{ message: String }>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message)
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }
}
