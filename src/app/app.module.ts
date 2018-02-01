import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherComponent } from './components/weather/weather.component';

//Router
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//HTTP
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './components/config/config.component';

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
    PageNotFoundComponent,
    ConfigComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
