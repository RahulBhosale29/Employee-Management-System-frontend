export interface Employee{
    id:number;
    name:string;
    departemt:string;
     status:string;
	 phoneno:string;
	 crerateddate:number;
	createdby:string;
   updateddate:number;
	 updatedby:string;
     country:{
        cid:number,
        cname:string
     }
}