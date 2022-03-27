import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css'],
})
export class ContenidoComponent implements OnInit {
  fecha: any = Date.now();
  alumnos: any[] = [
    {
      id: 1,
      name: 'Karina',
      lastname: 'Prado',
      age: 21,
      email: 'karina@gmail.com',
      curso: 'angular',
    },
    {
      id: 2,
      name: 'Carla',
      lastname: 'Caceres',
      age: 23,
      email: 'carla2022@gmail.com',
      curso: 'angular',
    },
    {
      id: 3,
      name: 'Samantha',
      lastname: 'Paredes',
      age: 22,
      email: 'sam.paredes@gmail.com',
      curso: 'angular',
    },
    {
      id: 4,
      name: 'Estefania',
      lastname: 'Castro',
      age: 20,
      email: 'castro.estefania@gmail.com',
      curso: 'angular',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  isOven() {}
  userClicked(username: string) {
    console.log('El usuario ' + username + ' fue clickeado');
  }
}
