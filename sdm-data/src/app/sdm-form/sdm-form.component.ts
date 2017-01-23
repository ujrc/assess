import { SdmHeader } from './../models/sdm-header';
import { FormGroup } from '@angular/forms';
import { SDM_DYNAMIC_FORM_MODEL } from './../models/sdm-from';
import { DynamicFormControlModel ,DynamicFormService} from '@ng2-dynamic-forms/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdm-form',
  templateUrl: './sdm-form.component.html',
  styleUrls: ['./sdm-form.component.css']
})
export class SdmFormComponent implements OnInit {


formModel:Array<DynamicFormControlModel>=SDM_DYNAMIC_FORM_MODEL;
sdmFormGroup:FormGroup;
  constructor(private formService: DynamicFormService) { }

  ngOnInit() {

    this.sdmFormGroup=this.formService.createFormGroup(this.formModel);
  }
onSubmit(value){
  console.log(this.sdmFormGroup.value);
}
}
