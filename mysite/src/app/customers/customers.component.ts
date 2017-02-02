import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

    public customerForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    initCustomerForm(){
      return this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    ngOnInit() {
        this.customerForm = this.initCustomerForm();
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            city:[''],
            state:[''],
            country:[''],
            postcode: ['']
        });
    }
    addAddress(){
      const control=<FormArray>this.customerForm.controls['addresses'];
      control.push(this.initAddress());
    }

    removeAddress(num:number){
      const control =<FormArray>this.customerForm.controls['addresses'];
      control.removeAt(num);
    }

    save(customer:Customer){
      console.log(customer);
    }
    }