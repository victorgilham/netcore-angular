import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
    console.log(this.values, 'Values');
  }

  getValues() {
    this.http.get('https://localhost:44390/api/values').subscribe(
      response => {
        console.log(response, 'Values');

        this.values = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
