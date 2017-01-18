import { element } from 'protractor';
export class SdmHeader {
    id:number;
    referralName:string;
    referralNumber:string;
    countyName:string;
    workerName:string;
    workerId:number;
    date?:any;
    items:Items;
}

export class Items{
    id?:number;
    title:string;
    subItems?:SubItems[];
}

export class SubItems{
id?:number;
title:string;
elements?:any[];
}