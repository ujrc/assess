import { ITEMS_DATA } from './../constants/data';
import { SdmHeader, Items } from './../models/sdm-header';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit,Inject } from '@angular/core';
@Component({
  selector: 'app-sdm-family-risk-assessment',
  templateUrl: './sdm-family-risk-assessment.component.html',
  styleUrls: ['./sdm-family-risk-assessment.component.css']
})
export class SdmFamilyRiskAssessmentComponent implements OnInit {

  items:Items[]=ITEMS_DATA;
  topics=[
    {id:1,title:'Prior neglect investigations','subitems':[{id:1,title:'No Prior neglect investigations'},
    {id:2,title:'One Prior neglect investigations'},{id:3,title:'Two prior neglect investigations'},
    {id:4,title:'Three or more prior neglect investigations'},]},
    {id:2,title:'Prior abuse investigations'},
    {id:3,title:'Current repeort maltreatment type'},
    {id:4,title:'PCharacteristics of children in the household'},
    {id:5,title:'Primary or secondary caregiver alcohol/or grug use'},

  ]
  
  sdmForm:FormGroup;
    onSubmit({ value, valid }: { value: SdmHeader, valid: boolean }) {
    console.log(value, valid);
  }

  constructor(private formBuilder:FormBuilder) { 
    
  }

  getItems(){
    return this.items;
  }

  ngOnInit() {

    this.getItems();
    this.sdmForm=this.formBuilder.group({
    referralName:['', Validators.required],
    referralNumber:[''],
    countyName:[''],
    workerName:[''],
    workerId:[''],
    date:[''],

    
    });
  }

}
