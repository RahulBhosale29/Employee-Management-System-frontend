import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/api/'
  constructor(private http:HttpClient) { }
   
  getAllRecord(){
    return(this.http.get(`${this.baseUrl}getallemployee`));
  }
  
  getParticularDataById(id:any){
    return (this.http.get(`${this.baseUrl}getbyid/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getalldata`));
  }

  PostEmpData(obj:any){
    return (this.http.post(`${this.baseUrl}saveemployee`,obj,{responseType:'text'}));

  }

  UpdateData(obj:any){
    return (this.http.put(`${this.baseUrl}updateemployee`,obj,{responseType:'text'}));
  }

  deleteData(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{responseType:'text'}));
  }



}

