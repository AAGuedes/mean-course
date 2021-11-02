import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  setPost(post: Post) {
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }
}
