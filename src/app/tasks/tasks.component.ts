import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: string[][] = [
    ['Comprar pão', 'Ir até a padaria e comprar 0,5kg de Pão'],
    ['Lavar os pratos', 'Lavar toda a loça da cozinha'],
    ['Trabalhar', 'Terminar projeto em Angular 4'],
  ];


  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.addTask(f.value.titulo, f.value.descricao);
    f.resetForm();
  }

  addTask(titulo: string, descricao: string) {
    this.tasks.push([titulo, descricao]);
  }

  remover(index: number) {
    this.tasks.splice(index, 1);
  }

}
