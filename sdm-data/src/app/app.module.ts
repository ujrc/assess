import { DynamicFormsBootstrapUIModule } from '@ng2-dynamic-forms/ui-bootstrap';
import { DynamicFormsCoreModule } from '@ng2-dynamic-forms/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SdmFamilyRiskAssessmentComponent } from './sdm-family-risk-assessment/sdm-family-risk-assessment.component';
import { SdmFormComponent } from './sdm-form/sdm-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SdmFamilyRiskAssessmentComponent,
    SdmFormComponent
  ],
  imports: [
    DynamicFormsCoreModule.forRoot(), 
   DynamicFormsBootstrapUIModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    

    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
