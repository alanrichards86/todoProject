import { Component, OnInit, NgModule } from '@angular/core';

//Http
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';

//Service
import { WeatherService } from '../../weatherService/weather.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: []
})


export class WeatherComponent implements OnInit {

  private weatherJSON: any;
  private weatherHolder: any;
  public cityInput: string = '';
  public cityName: string = '';
  public clouds: string = '';
  public countryName: string = '';
  public population: string = '';
  public windSpeed: string = '';
  
  constructor(private http: HttpClient, private weatherService: WeatherService) {
   }

  locationButtonStatus = true;

  ngOnInit() {
    this.weatherService.getJson().subscribe(data => {
      console.log(data);
    })
  }

  

  getCity() {
    this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + this.cityInput +  "&APPID=8dba29b56eefde52ad1be13b13becda3")
    .subscribe(
      (res: Response) => {
        this.weatherHolder = res;
        return this.assignWeatherInfo(this.weatherHolder);
      }
    )  
  }


  assignWeatherInfo(info) {
    console.log(info);
    this.cityName = info.city.name;
    this.countryName = info.city.country;
    this.clouds = info.list[0].weather[0].description;
    this.population = info.city.population;
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
}

//      FOR LOOP FOR LOOPING THROUGH
// for (let n of this.weatherHolder.list) {
        //   console.log(`This is N: ${JSON.stringify(n)}`);
        //   console.log(n.main.humidity);
        // }
