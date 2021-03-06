import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  enteredTitle: String = '';
  enteredContent: String = '';

  constructor(public postsService: PostsService) { }

  onAddPost(form: NgForm) {
    if (!form.invalid) {
      const post: Post = {
        title: form.value.title,
        content: form.value.content
      }
      this.postsService.setPost(post);
      form.resetForm();
    }
  }
}
