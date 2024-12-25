import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytestSerService {

  constructor() { }
  
   mul(a1 :number,b1:number){
    return a1*b1;
   }
}
