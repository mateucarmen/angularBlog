import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import Post from '../../models/Post';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.css'
})

export class DetailPostComponent implements OnInit {

selectedPost: any;

constructor (
  private route: ActivatedRoute,
  public postService: PostService
) {
  const id = route.snapshot.params["id"];
  console.log(id);
  
  this.selectedPost = postService.getById(id);
}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.getById(id);
  }

  getById(id: number) {
    this.postService.getById(id).subscribe({
      next: (data) => {
        console.log(data);
        this.selectedPost = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
    }

}
