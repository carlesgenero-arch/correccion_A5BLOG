import { Component, inject, signal } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NoticiasService } from '../../services/noticias.service';


@Component({
  selector: 'app-news-list',
  imports: [],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css',
})
export class NewsListComponent {
   misNoticias = signal<INew[]> ([])
  noticiasService =inject (NoticiasService)

  ngOnInit(){
    this.misNoticias.set (this.noticiasService.getAll())
  }


}
