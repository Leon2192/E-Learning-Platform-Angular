import { Injectable } from '@angular/core';
import { Alumnos } from '../interfaces/alumnos';
import { Inscripcion } from '../interfaces/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  listAlumnos: Alumnos[] = [
    {
      nombre: 'leonardo',
      apellido: 'arrieta',
      ocupacion: 'frontend',
    },
    {
      nombre: 'leonardo',
      apellido: 'arrieta',
      ocupacion: 'frontend',
    },
  ];

  constructor() {}

  getInscripcion() {
    return this.listAlumnos.slice();
  }

  eliminarCurso(index: number) {
    this.listAlumnos.splice(index, 1);
    console.log(index);
  }
}
