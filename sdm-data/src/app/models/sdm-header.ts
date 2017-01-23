import { element } from 'protractor';
export class SdmHeader {
    id:number;
    referralName:string;
    referralNumber:string;
    countyName:string;
    workerName:string;
    workerId:number;
    date?:any;
    priorNeglect?: string[]; // radio
    priorAbuse?: string[]; // select (primitive)
    ongoingCase?: string[]; // multiple select 
    injuryFromAbuse?:string[];
    currentMaltreatmentType?:string[];
    neglectAbuseChild?:string[];
    primeCaregiverAssess?:string[];
    youngestAge?:string[];
    childCharacteristics?:Items[];
    housing?:string[];
    caregiverAlcoholDrugUse?:string[];
}


export class Topics{
    id:number;
    title:string;
    subTopics?:SubTopics[];
}
export class SubTopics{
    id:number;
    title:string;
    items?:Items[];
}

export class Items{
id:number;
name:string;
elements?:any[];
}