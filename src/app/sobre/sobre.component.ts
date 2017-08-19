import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nav() {
    this.router.navigate(['/historia']);
  }

}
