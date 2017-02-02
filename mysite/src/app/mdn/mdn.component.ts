import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdn',
  templateUrl: './mdn.component.html',
  styleUrls: ['./mdn.component.css']
})
export class MdnComponent implements OnInit {

  name:string;
private _form:FormGroup;
  constructor(private _fb:FormBuilder) {
    this.name='Deep Nested Fields in Nested Array (Model Driven)! ';
   }

  ngOnInit() {

    this._form=this._fb.group({
      'companies':this._fb.array([
        this._fb.group({
          'company_name':['',Validators.required],
          'company_description': [''],
          'departments':this._fb.array([
            this._fb.group({
              'department_name':['']
            })
          ])
        })        

      ])
    });
  }

  onSubmit(){
    console.log(this._form.value);
  }

  initCompany(){
    return this._fb.group({
      'company_name':['',Validators.required],
      'company_description':[''],
      'departments':this._fb.array([
        this._fb.group({
          'department_name':['',Validators.required]
        })
        
      ])
    });
  }
 addCompany() {
    const control = <FormArray>this._form.controls['companies'];
    control.push(this.initCompany());
  }
  removeCompany(i: number) {
    const control = <FormArray>this._form.controls['companies'];
    control.removeAt(i);
  }

  initdepartment() {
    return this._fb.group({
      'department_name': ['', Validators.required]
    });
  }

  addDepartment(i: number) {
    const control = (<FormArray>this._form.controls['companies']).at(i).get('departments') as FormArray;
    control.push(this.initdepartment());
  }

  removeDepartment(i:number) {
    const control = (<FormArray>this._form.controls['companies']).at(i).get('departments') as FormArray;
    control.removeAt(i);
  }

}
