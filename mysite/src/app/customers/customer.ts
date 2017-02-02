export interface Customer {
    name:string;
    addresses:Address[],

}


export interface Address{
    street:string;
    city?:string;
    state?:string;
    counrty?:string;
    postcode:string;
}
