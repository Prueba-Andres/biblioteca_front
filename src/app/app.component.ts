import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BibliotecasService } from './services/bibliotecas/bibliotecas.service';
import { LibrosService } from './services/libros/libros.service';
import { TematicasService } from './services/tematicas/tematicas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  libroForm!: FormGroup;
  tematicas: any;
  libros: any;

  constructor(
    public fb: FormBuilder,
    public bibliotecasService: BibliotecasService,
    public librosService: LibrosService,
    public tematicasService: TematicasService,
  ) { }

  ngOnInit(): void {
    this.libroForm = this.fb.group({
      idLibro:[''],
      nombre: ['', Validators.required],
      tematica: ['', Validators.required],
    })

    this.tematicasService.ObtenerTematicas().subscribe(resp => {
      this.tematicas = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    );

    this.librosService.ObtenerLibros().subscribe(resp => {
      this.libros = resp;
    },
      error => { console.error(error) }
    );
  }

  guardar(): void {
    this.librosService.guadarLibro(this.libroForm.value).subscribe(resp => {
      console.log(resp);
      this.libroForm.reset();
      this.libros = this.libros.filter((libro: { idLibro: any; })=>resp.idLibro!==libro.idLibro)
      this.libros.push(resp);
    },
      error => { console.error(error) }

    )
  }

   eliminar(idLibro:any){
     this.librosService.eliminarLibro(idLibro).subscribe(resp => {
       console.log(resp)
       if(resp===true){
         this.libros.pop(idLibro);
 
       }
     })
   }

   editar(libro:any){
    this.libroForm.setValue({
      idLibro:libro.idLibro,
      nombre: libro.nombre,
      tematica: libro.tematica,
    })

   }
}
