import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clases } from 'src/app/interfaces/clases';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent implements OnInit {
  listClases: Clases[] = [];

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

  constructor(private _clasesService: ClasesService) {}

  ngOnInit(): void {
    this.cargarInscripciones();
  }

  cargarInscripciones() {
    this.listClases = this._clasesService.getInscripcion();
    this.dataSource = new MatTableDataSource(this.listClases);
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
    this._clasesService.eliminarCurso(index);
    this.cargarInscripciones();
  }
}
