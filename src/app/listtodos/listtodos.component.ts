import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, DatePipe } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }

  
}

@Component({
  selector: 'app-listtodos',
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './listtodos.component.html',
  styleUrl: './listtodos.component.css'
})
export class ListtodosComponent implements OnInit{
todos = [
  new Todo(1, "learn to dance", false, new Date()),
  new Todo(2, "practice topspin serve", false, new Date()),
  new Todo(3, "become an expert in Java", false, new Date()),
]
  constructor() {}

  ngOnInit(): void {
    
  }
}
