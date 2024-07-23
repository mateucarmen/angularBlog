import { Injectable } from '@angular/core';
import Post from '../models/Post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {

API_URL = "https://my-json-server.typicode.com/mariogiron/blog-server/posts";

posts: Post[];

  constructor(private http: HttpClient) {
    this.posts = [];
  }

  getAll() {
    return this.http.get<Post[]>(this.API_URL);
  }
 
  getById(id: number) {
    return this.http.get<Post>(`${this.API_URL}/${id}`);
  }
  
  createPost(post: Post) {
    post.id = this.posts.length + 1;
    return this.http.post<Post>(this.API_URL, post);
  }
}

