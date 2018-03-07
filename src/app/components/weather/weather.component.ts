import { Component, OnInit, NgModule } from '@angular/core';

//Http
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';

//Service
import { WeatherService } from '../../weatherService/weather.service';

//Forms
import { FormControl, FormGroup } from '@angular/forms/src/model';
import { NgForm } from '@angular/forms';
import { NgControl } from '@angular/forms/src/directives/ng_control';
import { NgModel } from '@angular/forms/src/directives/ng_model';

//RxJs
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: []
})


export class WeatherComponent implements OnInit {

  public weatherData: any = "";
  public country: string = "";
  public city: string = "";
  public clouds: string = "";
  public population: string = "";
  public cityData: object;

  private searchInfo = new Subject<string>();

  constructor(private http: HttpClient, private weatherService: WeatherService) {
   }

  locationButtonStatus = true;

  ngOnInit() {
    this.searchInfo
      .switchMap((input:string) => this.weatherService.findWeatherData(input))
        .subscribe(
          data => console.log(data)
        );
  }

  onSubmit(form) {
    console.log(form);
    this.weatherService.findWeatherData(form)
      .subscribe((res: Response) => {
        this.weatherData = res;
          console.log(this.weatherData);   
        this.country = this.weatherData.city.country;
        this.city = this.weatherData.city.name;
        this.clouds = this.weatherData.list[0].weather[0].description;
        this.population = this.weatherData.city.population;         
        });
    return this.weatherData;
      }

  buttonStatus() {
    let count = 0
    if(this.locationButtonStatus === true && count === 0){
      this.locationButtonStatus = false;
      count++;
    }else {
      return;
    }
  }
  
  findLocation(locationName: string) {
    this.searchInfo
      .next(locationName);
  }

}
