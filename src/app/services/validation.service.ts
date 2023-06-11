import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isEmpty(data:string):boolean{
    if(data === ""){
      return false
    } else {
      return true
    }
  }

}
