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

  isNumberKey(e:KeyboardEvent):boolean {
    let charCode = (e.which) ? e.which : e.keyCode
    if (!(charCode < 48 || charCode > 57) || charCode == 8 || charCode == 46 || !(charCode < 96 || charCode > 105)){
      return true;
    }
    return false;
  }

  charactersBe(e:number , num:number , unlimited:string):boolean {
    if(unlimited === 'unlimited'){
      if (e >= num){
        return true
      }
    } else {
      if (e === num){
        return true
      }
    }
    return false
  }



}
