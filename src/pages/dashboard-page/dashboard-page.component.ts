import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService]
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array<any>;

  constructor(protected router: Router, protected weatherService: WeatherService) {
   }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
      this.weatherDetail = weather;
    });
  }
}
