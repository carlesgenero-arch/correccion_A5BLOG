import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INew } from '../../interfaces/inew.interface';
import { NoticiasService } from '../../services/noticias.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
   nuevaNoticia: INew ={titulo:"", texto:"", imagen: "", fecha:""}
   noticiasService = inject (NoticiasService)

   
  getDataForm(){
    if(this.nuevaNoticia.titulo != "" && this.nuevaNoticia.texto !="" && this.nuevaNoticia.fecha !="" && this.nuevaNoticia.imagen !=""){
      let response:string =this.noticiasService.insert (this.nuevaNoticia)
      this.nuevaNoticia ={titulo:"", texto:"", imagen: "", fecha:""}
     Swal.fire({
        title: 'Felicidades!',
        text: 'response',
        icon: 'success',
        
        })
     }

    else{
      Swal.fire({
        title: 'Error!',
        text: 'Los campos no pueden estar vacios!',
        icon: 'error',
        
        })
      
    }

  }

}
