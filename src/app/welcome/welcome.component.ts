import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {

  message= 'Some Welcome Message';
  name = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']; // Get name from URL

    console.log(this.message);
    console.log(this.name);
  }
}
