import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
//   baseUrl:string="http://localhost:8888"

//   constructor(public httpObj:HttpClient) { }

//   getRecord(tableName:any){
// return this.httpObj.get(`${this.baseUrl}/${tableName}`);
//   }

//   deleteRecord(tableName:any,id:any){
// return this.httpObj.delete(`${this.baseUrl}/${tableName}/${id}`);
//   }

//   addRecord(tableName:any,body:any){
// return this.httpObj.post(`${this.baseUrl}/${tableName}`,body);
//   }
  
//   getSingleRecord(tableName:any,id:any){
//     return this.httpObj.get(`${this.baseUrl}/${tableName}/${id}`);
//       }
    

//       updateRecord(tableName:any,id:any,body:any){
//         return this.httpObj.put(`${this.baseUrl}/${tableName}/${id}`,body);
//           }

baseURL:string="http://localhost:8888";
  
constructor(public httpObj: HttpClient) { 
  }

getRecord(tableName:any){
  return this.httpObj.get(`${this.baseURL}/${tableName}`);
}
getSingleRecord(tableName:any, id:any){
  return this.httpObj.get(`${this.baseURL}/${tableName}/${id}`);
}

deleteRecord(tableName:any, id:any){
  return this.httpObj.delete(`${this.baseURL}/${tableName}/${id}`);
}

postRecord(tableName:any, val:any){
  return this.httpObj.post(`${this.baseURL}/${tableName}`, val);
}

putRecord(tableName:any,id:any, val:any){
  return this.httpObj.put(`${this.baseURL}/${tableName}/${id}`, val);
}


 }
