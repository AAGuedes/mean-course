import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  enteredTitle: String = '';
  enteredContent: String = '';

  @Output()
  postCreated = new EventEmitter();

  onAddPost() {
    const post: Object = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post);
  }
}
