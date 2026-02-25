import { Component, signal } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NOTICIAS } from '../../db/noticias.db';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

  misNoticias = signal<INew[]>(NOTICIAS)

}
