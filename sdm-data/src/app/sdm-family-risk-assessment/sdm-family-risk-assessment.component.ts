import { TOPICS_DATA } from './../constants/data';
import { SdmHeader, Items, Topics } from './../models/sdm-header';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit,Inject } from '@angular/core';

// const TOPICS_DATA=[
//     {id:1,title:'Prior neglect investigations'},
//     {id:2,title:'Prior abuse investigations'},
//     {id:3,title:'Current repeort maltreatment type'},
//     {id:4,title:'Characteristics of children in the household'},
//     {id:5,title:'Primary or secondary caregiver alcohol/or grug use'},
//     ];
@Component({
  selector: 'app-sdm-family-risk-assessment',
  templateUrl: './sdm-family-risk-assessment.component.html',
  styleUrls: ['./sdm-family-risk-assessment.component.css']
})
export class SdmFamilyRiskAssessmentComponent implements OnInit {

  topics=TOPICS_DATA;
  
  priorsNeglect=[
    {id:1,title:'No prior neglect investigations'},
    {id:2,title:'One Prior neglect investigations'},
    {id:3,title:'Two prior neglect investigations'},
    {id:4,title:'Three or more prior neglect investigations'},   

  ];
  priorAbuses=[
    {id:1,title:'No prior abuse investigations'},
    {id:2,title:'One Prior abuse investigations'},
    {id:3,title:'Two prior abuse investigations'},
    {id:4,title:'Three or more prior abuse investigations'},
    ];
  currentMaltreatmentTypes=[
    {id:1,title:'Neglect'},
    {id:2,title:'Physical and/or emotional abuse'},
    {id:3,title:'None of the above'},];
  childCharacteristics=[{id:1,title:'Not applicable'},
    {id:2,title:'One or more present','details':[{'name':'Mental or health behavioral probelms'},
  {'name':'Development disability'},
  {'name':'Learning Disability'},
  {'name': 'Physical disability'},
  {'name': 'Medical fragile or failure to thrive'}
    ]},];
    caregiverAlcoholDrugUse=[{id:1,title:'No past or current alcohol/drug use that interferes with family functioning'},
    {id:2,title:'Past or current alcohol/drug use that interferes with family functioning'},];
  

  sdmForm:FormGroup;
    onSubmit({ value, valid }: { value: SdmHeader, valid: boolean }) {
    console.log(value, valid);
  }

  constructor(private formBuilder:FormBuilder) { 
    
  }

  // getTopics(){
  //   console.log(this.topics);

  // }

  ngOnInit() {

    // this.getTopics();
    this.sdmForm=this.formBuilder.group({
    referralName:['', Validators.required],
    referralNumber:[''],
    countyName:[''],
    workerName:[''],
    workerId:[''],
    date:[''],
    priorNeglect:[''],
    priorAbuse:[''],
    currentMaltreatmentType:[''],
    childCharacteristics:[''],
    caregiverAlcoholDrugUse:[''],

    
    });
  }

}
