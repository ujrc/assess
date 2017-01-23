import { DynamicRadioGroupModel,
        DynamicCheckboxGroupModel ,
        DynamicFormControlModel,
        DynamicCheckboxModel,
        DynamicInputModel } from '@ng2-dynamic-forms/core';
export const SDM_DYNAMIC_FORM_MODEL:Array<DynamicFormControlModel>=[
    new DynamicInputModel({
        id:"referralName",
        label:'Referral Name',
       }),
        new DynamicInputModel({
        id:"referralNumber",
        label:'Referral Number',
       }),
        new DynamicInputModel({
        id:"countyName",
        label:'County Name',
        maxLength: 42,
       }),
        new DynamicInputModel({
        id:"workerName",
        label:'worker Name',
        maxLength: 42,
       }),
        new DynamicInputModel({
        id:"workerId",
        label:'WorkerID',
        maxLength: 42,
       }),
        new DynamicInputModel({
        id:"date",
        label:'Date',
        maxLength: 42,
       }),
       new DynamicRadioGroupModel({
            id: "priorNeglect",
            label: "Prior neglect investigations",
options: [
            {
                label: "No Prior neglect investigations ",
                value: "neglect-1",
            },
            {
                label: "One prior neglect investigations",
                value: "neglect-2"
            },
            {
                label: "Two prior neglect investigations",
                value: "neglect-3"
            },
            {
                label: "Three or more prior neglect investigations",
                value: "neglect-4"
            }
        ],
       }),
             new DynamicRadioGroupModel({
            id: "priorAbuse",
            label: "Prior abuse investigations",
options: [
            {
                label: "No Prior abuse investigations ",
                value: "abuse-1",
            },
            {
                label: "One prior abuse investigations",
                value: "abuse-2"
            },
            {
                label: "Two prior abuse investigations",
                value: "abuse-3"
            },
            {
                label: "Three or more prior abuse investigations",
                value: "abuse-4"
            }
        ],
       }),


       new DynamicCheckboxGroupModel(
           {
              id:'currentMaltreatmentType' ,
              label:'Current report maltreatment type',
              group:[
                  new DynamicCheckboxModel({
                      id:"neglect",
                      label:'Neglect',
                      value:true
                  },
                  {
                  grid:{
                      control:'col-sm-12'
                  }
                  }),
                  new DynamicCheckboxModel(
                            {
                                id: "physicalEmotionalAbuse",
                                label: "Physical and/or emotional abuse",
                                value: true
                            },
                            {
                                grid: {
                                    control: "col-sm-12"
                                }
                            }
                  ),
                  new DynamicCheckboxModel(
                            {
                                id: "noemaltreatment",
                                label: "None of the above",
                                value: true
                            },
                            {
                                grid: {
                                    control: "col-sm-12"
                                }
                            }
                  )
              ]
           },
           {
               element:{
                   label:"control-label"
               },
               grid:{
                   control:'col-sm-9',
                   label:'col-sm-3'
               }
           }
       ),


       
           
             new DynamicRadioGroupModel({
            id: "householdChildrenCharacteristics",
            label: "Characteristics of children in the household",
options: [
            {
                label: "Not applicable",
                value: "Not Applicable",
            },
            {
                label: "One or more present",
                value: "One or More Present"
            },
            
            
        ],
       }),
             new DynamicRadioGroupModel({
            id: "primaryOrSecondaryCaregiverAlcoholDrugUse",
            label: "Primary or Secondary caregiver alcohol and / or drug use ",
options: [
            {
                label: "No past or current alcohol/drud use that interferes with the family functioning",
                value: "option-1",
            },
            {
                label: "Past or current alcohol/drud use that interferes with the family functioning",
                value: "option-2"
            },
            
        ],
       })

]