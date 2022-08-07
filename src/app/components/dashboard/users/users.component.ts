import { Component, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/interfaces/inscripcion';

const listaInscripciones: Inscripcion[] = [
  {
    fecha: '27/8',
    curso: 'React',
    horario: '10:00 - 12:00',
    profesor: 'Lautaro Garcia',
  },
  {
    fecha: '27/8',
    curso: 'React',
    horario: '15:00 - 17:00',
    profesor: 'Genaro Pintos',
  },
  {
    fecha: '27/8',
    curso: 'React',
    horario: '19:00 - 21:00',
    profesor: 'Conrado Lanusse',
  },
  {
    fecha: '30/8',
    curso: 'React',
    horario: '15:00 - 17:00',
    profesor: 'Darío Colombo',
  },
  {
    fecha: '30/8',
    curso: 'React',
    horario: '20:00 - 22:00',
    profesor: 'Leonardo Arrieta',
  },
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'curso', 'horario', 'profesor'];
  dataSource = listaInscripciones;
  constructor() {}

  ngOnInit(): void {}
}
