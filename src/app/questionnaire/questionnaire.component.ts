import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  get investment():number {return this.data['investment'];}
  get No_shifts_day():number {return this.data['No_shifts_day'];}
  get No_days_week():number {return this.data['No_days_week'];}
  get No_weeks_year():number {return this.data['No_weeks_year'];}
  get No_works_shift():number {return this.data['No_works_shift'];}
  get Hourly_wage():number {return this.data['Hourly_wage'];}
  get No_shifts_day_operational():number {return this.data['No_shifts_day_operational'];}
  get Hours_person_liberated():number {return this.data['Hours_person_liberated'];}

  set investment(value: number) {this.data['investment'] = value;}
  set No_shifts_day(value: number) {this.data['No_shifts_day'] = value;}
  set No_days_week(value: number) {this.data['No_days_week'] = value;}
  set No_weeks_year(value: number) {this.data['No_weeks_year'] = value;}
  set No_works_shift(value: number) {this.data['No_works_shift'] = value;}
  set Hourly_wage(value: number) {this.data['Hourly_wage'] = value;}
  set No_shifts_day_operational(value: number) {this.data['No_shifts_day_operational'] = value;}
  set Hours_person_liberated(value: number) {this.data['Hours_person_liberated'] = value;}

  constructor(
    private data: DataService,
    private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

  
}
