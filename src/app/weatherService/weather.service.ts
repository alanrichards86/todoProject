import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {
        var obj;
        this.getJson().subscribe(data => obj = data, error => console.log(error));
    }

    public getJson(): Observable<any> {
        return this.http.get("city-list.json"); 
    }
}