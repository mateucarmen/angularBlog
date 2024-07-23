import { PostFormComponent } from './../../components/post-form/post-form.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    HeaderComponent,
    PostFormComponent,
    FooterComponent
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

}
