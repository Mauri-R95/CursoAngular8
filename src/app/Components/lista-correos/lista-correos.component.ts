import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { AvisosService } from 'src/app/Services/avisos.service';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];
  columnsToDisplay: string[] = ['Emisor', 'Asunto', 'Acciones'];
  displayedColumns: string[] = ['emisor', 'titulo', 'id'];
  dataSource = new MatTableDataSource<any>();
  expandedElement: any | null; 
  responder: boolean;
  correoAResponder: any;

  constructor( private router: Router, private servicioAvisos: AvisosService) {
    const correo1 = {
      titulo: "Titulo del 1",
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email,
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email`,
      emisor: 'correoEmisor1@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: true,
    };
    this.dataSource.data.push(correo1);
    const correo2 = {
      titulo: "Titulo del 2",
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuer`,
      emisor: 'correoEmisor2@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: false,
    };
    this.dataSource.data.push(correo2);
    const correo3 = {
      titulo: "Titulo del 3",
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuer`,
      emisor: 'correoEmisor3@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: false,
    };
    this.dataSource.data.push(correo3);
    const correo4 = {
      titulo: "Titulo del 4",
      cuerpo: `Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email
        Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuerpo del Email, Cuer`,
      emisor: 'correoEmisor4@openWebinar.inv',
      destinatario: 'correoReceptor@openWebinar.inv',
      leido: false,
    }
    this.dataSource.data.push(correo4);
    this.correos = [];
    this.correos.push(correo1);
    this.correos.push(correo2);
    this.correos.push(correo3);
    this.correos.push(correo4);
    this.dataSource._updateChangeSubscription();
    this.responder = false;
  }

  ngOnInit(): void {
  }

  clickResponder(correo){
    //this.responder = !this.responder;
    //this.correoAResponder = correo;
    correo.responder = !correo.responder;
  }

  accionRespuestaRapida(correo) {
    correo.responder = false;
    console.log("Respuesta Recibida");
  }

  error(error){
    this.servicioAvisos.showMenssage("Se ha producido un error", "Error");
  }

  verDetalle(correo){
    this.router.navigate(['/mail', {correo: JSON.stringify(correo)}]);
  }
}
