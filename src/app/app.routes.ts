import { Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { DetailPostComponent } from './pages/detail-post/detail-post.component';

export const routes: Routes = [
    { path: "", component: PostListComponent },
    { path: "create", component: CreatePostComponent },
    { path: ":id", component: DetailPostComponent}
];
