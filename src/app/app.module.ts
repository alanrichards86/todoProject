import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherComponent } from './components/weather/weather.component';

//Router
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//HTTP
import { HttpClientModule, HttpClient } from '@angular/common/http';

//FormsModule
import { FormsModule } from '@angular/forms';

//Service
import { WeatherService } from './weatherService/weather.service';

const appRoutes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent,
    data: { title: 'WeatherHome' }
  },
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // Make 'true' for debugging purposes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
