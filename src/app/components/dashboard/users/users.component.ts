import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inscripcion } from 'src/app/interfaces/inscripcion';
import { InscripcionesService } from 'src/app/services/inscripciones.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  listInscripcion: Inscripcion[] = [];

  displayedColumns: string[] = [
    'fecha',
    'curso',
    'horario',
    'profesor',
    'acciones',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _inscripcionesService: InscripcionesService) {}

  ngOnInit(): void {
    this.cargarInscripciones();
  }

  cargarInscripciones() {
    this.listInscripcion = this._inscripcionesService.getInscripcion();
    this.dataSource = new MatTableDataSource(this.listInscripcion);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCurso(index: number) {
    console.log(index);
    this._inscripcionesService.eliminarCurso(index);
    this.cargarInscripciones();
  }
}
