import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-listtodos',
  imports: [NgIf, NgFor],
  templateUrl: './listtodos.component.html',
  styleUrl: './listtodos.component.css'
})
export class ListtodosComponent implements OnInit{
todos = [
  {
    id: 1,
    description: "learn to dance"
  },
  {
    id: 2,
    description: "practice topspin serve"
  },
  {
    id: 3,
    description: "become an expert in Java"
  },
]
  constructor() {}

  ngOnInit(): void {
    
  }
}
