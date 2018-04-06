import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http/src/module';

@Injectable()
export class WeatherService {
public weatherHolder;
    constructor(private http: HttpClient) {
    }
    findWeatherData(cityInput: string) {
        return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='
        + cityInput + '&APPID=8dba29b56eefde52ad1be13b13becda3&units=imperial');
    }
}
