import { Component, OnInit, NgModule } from '@angular/core';

//Http
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})


export class WeatherComponent implements OnInit {

  private weatherHolder: any;
  public cityInput: string = '';
  public cityName: string = '';
  public clouds: string = '';
  public countryName: string = '';
  public population: string = '';
  public windSpeed: string = '';
  
  constructor(private http: HttpClient) { }

  locationButtonStatus = true;

  ngOnInit() {
  }
  
  getCity() {
    this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + this.cityInput +  "&APPID=8dba29b56eefde52ad1be13b13becda3")
    .subscribe(
      (res: Response) => {
        this.weatherHolder = res;
        console.log(this.weatherHolder);
        this.cityName = this.weatherHolder.city.name;
        this.countryName = this.weatherHolder.city.country;
        this.clouds = this.weatherHolder.list[0].weather[0].description;
        this.population = this.weatherHolder.city.population;
      }
    )
  }
  buttonStatus() {
    let count = 0
    if(this.locationButtonStatus === true && count === 0){
      this.locationButtonStatus = false;
      count++
      console.log(count);
    }else {
      console.log('Button enabled already');
      return;
    }
  }  
}

//      FOR LOOP FOR LOOPING THROUGH
// for (let n of this.weatherHolder.list) {
        //   console.log(`This is N: ${JSON.stringify(n)}`);
        //   console.log(n.main.humidity);
        // }
