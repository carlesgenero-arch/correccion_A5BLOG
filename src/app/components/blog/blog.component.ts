import { Component, inject, signal } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NewsListComponent } from '../news-list/news-list.component';




@Component({
  selector: 'app-blog',
  imports: [FormComponent, NewsListComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
 


}
