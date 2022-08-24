import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from 'src/app/interfaces/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-users',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  listAlumnos: Alumnos[] = [];

  displayedColumns: string[] = ['nombre', 'apellido', 'ocupacion'];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.cargarInscripciones();
  }

  cargarInscripciones() {
    this.listAlumnos = this._alumnosService.getInscripcion();
    this.dataSource = new MatTableDataSource(this.listAlumnos);
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
    this._alumnosService.eliminarCurso(index);
    this.cargarInscripciones();
  }
}
