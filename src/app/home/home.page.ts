import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private http: HttpClient) {}

  calculatorObj = {
    firstNumber  :  0 ,
    secondNumber :  0,
    operator : "",
  }
  result : any;
 

calculate(){
  console.log(this.calculatorObj)
  this.http.post("http://localhost:8080/api/v1/performCalculations", this.calculatorObj).subscribe(res =>{
    this.result = res
  })  
}

listOfCalculations(){
  
}
 

  clr(){

  }
}
