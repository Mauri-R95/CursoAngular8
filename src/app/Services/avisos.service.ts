import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  mensaje: string;
  visible: boolean;

  constructor(private _snackBar: MatSnackBar) {}

  showMenssage(mensaje: string, tipo?: string){
    let tipoMensaje = 'Información';
    if(tipo){
      tipoMensaje = tipo;
    }
    this._snackBar.open(mensaje, tipoMensaje, {
      duration: 2000,
    });
  }

  hideMenssage(){
    this.visible = false;
    this.mensaje = '';
  }

  waitToHide(){
    setTimeout(() => {
      this.hideMenssage();
    }, 2000);
  }
}
