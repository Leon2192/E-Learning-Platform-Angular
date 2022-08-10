import { Injectable } from '@angular/core';
import { Inscripcion } from '../interfaces/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  listaInscripciones: Inscripcion[] = [
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
    {
      fecha: '21/8',
      curso: 'Javascript',
      horario: '20:00 - 22:00',
      profesor: 'Jorge Federico Nahas',
    },
    {
      fecha: '24/8',
      curso: 'Javascript',
      horario: '20:00 - 22:00',
      profesor: 'Nicolás Mercado',
    },
    {
      fecha: '27/8',
      curso: 'Javascript',
      horario: '20:00 - 22:00',
      profesor: 'Rolando Adrián Riquelme',
    },
    {
      fecha: '30/8',
      curso: 'Javascript',
      horario: '20:00 - 22:00',
      profesor: 'Juan Carlos Aranda',
    },
    {
      fecha: '18/8',
      curso: 'HTML',
      horario: '20:00 - 22:00',
      profesor: 'Román Andrés Marichal',
    },
    {
      fecha: '19/8',
      curso: 'HTML',
      horario: '20:00 - 22:00',
      profesor: 'Ricardo Gutiérrez',
    },
    {
      fecha: '22/8',
      curso: 'HTML',
      horario: '20:00 - 22:00',
      profesor: 'Leonardo Arrieta',
    },
    {
      fecha: '27/8',
      curso: 'HTML',
      horario: '20:00 - 22:00',
      profesor: 'Conrado Lanusse',
    },
  ];

  constructor() {}

  getInscripcion() {
    return this.listaInscripciones.slice();
  }

  eliminarCurso(index: number) {
    this.listaInscripciones.splice(index, 1);
    console.log(index);
  }
}
