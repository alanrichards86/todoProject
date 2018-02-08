import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {
        
    }

    getWeather() {
        
    }

    findWeatherData(cityInput: string): Observable<any>{
        return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&APPID=8dba29b56eefde52ad1be13b13becda3&units=imperial");
    }
}

// public getJson(): Observable<any> {
//     console.log('SERVICE WORKING:');
//    return this.http.get<any>("../components/location-list/city-list.json"); 

// }

// var obj;
// this.getJson()
    // .subscribe(data => obj = data, error => console.log(error));