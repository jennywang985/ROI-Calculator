import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  information:any=[

  ]

  constructor(
    private data: DataService,
    private router: Router) { }

  ngOnInit() {
    this.information=this.data.compute();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }

}
