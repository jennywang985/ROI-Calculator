import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataService } from './data.service';

const routes: Routes = [
  { path: '', component: QuestionnaireComponent, pathMatch: 'full'},
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
