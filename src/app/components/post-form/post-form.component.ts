import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  title: FormControl;
  text: FormControl;
  author: FormControl;
  publishDate: FormControl;
 
  constructor(public postService: PostService) {
    this.title = new FormControl('', Validators.required);
    this.text = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.publishDate = new FormControl('', Validators.required);
    
 
    this.postForm = new FormGroup({
      title: this.title,
      text: this.text,
      author: this.author,
      publishDate: this.publishDate,
    });
  }

  ngOnInit(): void {
    this.createPost();
  }

  createPost(){
    this.postService.createPost(this.postForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.postService.posts.push(this.postForm.value);
        this.postForm.reset();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}

