import { FormGroup,FormBuilder,FormControl,FormArray, Validators} from '@angular/forms';
import { IDay } from './site-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
 form:FormGroup;
 public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' },
    { value: 'O', display: 'Other' },
    { value: 'B', display: 'Both' },
];

 private activities :any[] = [
   {id:1,name: 'sport'}, 
{id:2,name: 'sing',types:[{id:1,title:'Gospel'},
{id:2,title:'Modern',subtypes:[{id:1,title:'country'},{id:2,title:'Hip hop'}]},
{id:3,title:'Traditional'}]},
    {id:3,name: 'work'}, {
      id:4,name: 'other'}];


  constructor(private fb: FormBuilder){
    // this.initCheckboxes()
  }
types:any[]=[
  {value:1,name:'type1'},
  {value:2,name:'type2'},
  {value:3,name:'type3'}
];


initCheckboxes(){ 
  let allActivities: FormArray = new FormArray([]);  
  for (let idx = 0; idx < this.activities.length; idx++) {
    let fgroup = new FormGroup({});
    fgroup.addControl(this.activities[idx].name, new FormControl(false))
    allActivities.push(fgroup)
  }
  return allActivities 
}

 initForm(){
   this.form = this.fb.group({
    referralName:['',Validators.required],
    referralNumber:[''],
    countyName:[''],
   workerName:[''],
    workerId:[''],
    date:[''],
    'gender' :['M'],
     
      'activities':this.initCheckboxes(),
      
      

});
      
 }

 checkboxRequired(group: FormGroup) {
  var valid = false;

  for (let name in group.controls) {
    var check = Validators.required(group.controls[name]);
    if (!check) {
      valid = true;
      break;
    }
  }

  if (valid) {
    return null;
  }

  return {
    checkboxRequired: true
  };
}
 onSubmit(value:any){
   console.log(value);
  //  console.log(this.updateOptions())
 }
  

  ngOnInit() {
    this.initCheckboxes();
    this.initForm();
    
  }
}


