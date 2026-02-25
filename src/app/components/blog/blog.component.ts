import { Component, signal } from '@angular/core';
import { INew } from '../../interfaces/inew.interface';
import { NOTICIAS } from '../../db/noticias.db';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-blog',
  imports: [DatePipe,FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {

  misNoticias = signal<INew[]>(NOTICIAS)
  nuevaNoticia: INew = {titulo:"", texto:"", imagen: "", fecha:""}

  getDataForm(){
    if(this.nuevaNoticia.titulo != "" && this.nuevaNoticia.texto !="" && this.nuevaNoticia.fecha !="" && this.nuevaNoticia.imagen !=""){
      this.misNoticias.update((noticias)=>[...noticias,this.nuevaNoticia])
      this.nuevaNoticia = {titulo:"", texto:"", imagen: "", fecha:""}

    }else{
      alert ('Los campos no pueden estar vacios')
    }

  }

}
