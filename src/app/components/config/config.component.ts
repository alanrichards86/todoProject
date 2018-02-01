import { Component, OnInit } from '@angular/core';

//Service
import { ConfigService } from './config-service';

//Interface
import { Config } from '../../config-interface';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config: Config;



  constructor(private configService: ConfigService ) {
    
   }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig()
    .subscribe(data => this.config = { ...data});
  }
  

}
