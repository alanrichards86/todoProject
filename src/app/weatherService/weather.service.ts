import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpClientModule } from "@angular/common/http/src/module";

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {   
    }

    findWeatherData(cityInput: string): Observable<any>{
        let weatherHolder;
        this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&APPID=8dba29b56eefde52ad1be13b13becda3&units=imperial")
                    .subscribe((res: Response) => {
                        weatherHolder = res;
                            console.log(weatherHolder);
                        
    });
        return weatherHolder;
}

// public getJson(): Observable<any> {
//     console.log('SERVICE WORKING:');
//    return this.http.get<any>("../components/location-list/city-list.json"); 

// }

// var obj;
// this.getJson()
    // .subscribe(data => obj = data, error => console.log(error));