import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public investment: number;
  public No_shifts_day: number;
  public No_days_week: number;
  public No_weeks_year: number;
  public No_works_shift: number;
  public Hourly_wage: number;
  public No_shifts_day_operational: number;
  public Hours_person_liberated: number;

  constructor() { }

  compute(): object[]{

    //Remap form input variables
    let Investment = this.investment; 
    let No_shifts_day= this.No_shifts_day;   
    let No_days_week= this.No_days_week; 
    let No_weeks_year= this.No_weeks_year; 
    let No_works_shift= this.No_works_shift; 
    let Hourly_wage= this.Hourly_wage; 
    let No_shifts_day_operational= this.No_shifts_day_operational; 
    let Hours_person_liberated= this.Hours_person_liberated; 

    //Static Constants
    let Cost_robot=4990,
        Cost_gripper=1000,
        Hours_shift=8,
        Months_year=12

    //Calculator
    let Days_Year=No_days_week*No_weeks_year,
        Hours_Year=No_shifts_day*Hours_shift*Days_Year,
        Hours_operational=Hours_shift-Hours_person_liberated,
        Hours_Year_operational=No_shifts_day_operational*Hours_operational*Days_Year

    //Current Process costs
    let Wages_works_Year=Hours_Year*Hourly_wage*No_works_shift
    //Robotic Solution Costs
    let Wages_works_Year_operational=Hours_Year_operational* Hourly_wage*No_works_shift
    //Net Cost Savings
    let Net_cost_Savings=Wages_works_Year-Wages_works_Year_operational
    //Break Even Point In Months
    let Break_Even_Point=Investment/(Net_cost_Savings/Months_year)
    //Year Return
    let First_Year_Return=Net_cost_Savings-Investment,
        Second_Year_Return=Net_cost_Savings+First_Year_Return,
        Third_Year_Return=Net_cost_Savings+Second_Year_Return,
        Fourth_Year_Return=Net_cost_Savings+Third_Year_Return,
        Fifth_Year_Return=Net_cost_Savings+Fourth_Year_Return

    return [{Break_Even_Point,Net_cost_Savings,First_Year_Return,Second_Year_Return,Third_Year_Return,Fourth_Year_Return,Fifth_Year_Return}];
  }
}
