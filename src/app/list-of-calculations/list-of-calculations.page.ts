import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-calculations',
  templateUrl: './list-of-calculations.page.html',
  styleUrls: ['./list-of-calculations.page.scss'],
})
export class ListOfCalculationsPage implements OnInit {

  constructor(private http: HttpClient) { }

  results : any;
  
  ngOnInit() {
      this.http.get("http://localhost:8080/api/v1/getCalculations").subscribe(res=>{
        this.results = res
      
      })
  }

}
