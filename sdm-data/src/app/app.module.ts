import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SdmFamilyRiskAssessmentComponent } from './sdm-family-risk-assessment/sdm-family-risk-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    SdmFamilyRiskAssessmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
