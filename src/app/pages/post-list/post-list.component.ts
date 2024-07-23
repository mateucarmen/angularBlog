import { routes } from './../../app.routes';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  constructor (public postService: PostService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.postService.posts = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
}
