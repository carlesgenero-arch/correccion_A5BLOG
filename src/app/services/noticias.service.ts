import { Injectable } from '@angular/core';
import { INew } from '../interfaces/inew.interface';
import { NOTICIAS } from '../db/noticias.db';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  
  private misNoticias:INew []= NOTICIAS

  getAll():INew []{
    return this.misNoticias
  }

  insert (noticia: INew) :string {
    this.misNoticias.push (noticia)
    return ("noticia insertada correctamente") 
    
  }
}
