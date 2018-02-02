import { Component, OnInit, NgModule } from '@angular/core';

//Http
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient) { }

  cityName = '';

  ngOnInit() {
  }
  
  getCity() {
    this.http.get("http://api.openweathermap.org/data/2.5/forecast?id=" + this.cityName +  "&APPID=8dba29b56eefde52ad1be13b13becda3")
    .subscribe(
      (res: Response) => {
        const weatherCity = res;
        console.log(weatherCity);
      }
    )
  }
}
