
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';

@Injectable()
export class ConfigService {
    constructor (private http: HttpClient ) {}

    configUrl = 'assests/config.json';

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }
}
// This is how the api call should look when calling just the city.   URL/Cith/APPID/MyUniqueKey
// http://api.openweathermap.org/data/2.5/weather?q=Hurzuf&APPID=8dba29b56eefde52ad1be13b13becda3