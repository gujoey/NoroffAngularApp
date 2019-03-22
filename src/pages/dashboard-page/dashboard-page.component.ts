import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import { CryptoCurencyService } from './../../services/crypto-curency.service';
import { BreweryService } from './../../services/breweries.service';
import { JobsService } from './../../services/jobs.service';
import { SpacexLaunchService } from './../../services/spacex-launches.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService, CryptoCurencyService, BreweryService, JobsService, SpacexLaunchService]
})
export class DashboardPageComponent implements OnInit {

	public weatherDetail: Array<any>;
	public cryptoDetail: Array<any>;
	public breweryDetail: Array<any>;
	public jobsDetail: Array<any>;
	public spacexLaunchDetail: Array<any>;

	constructor(protected router: Router, 
				 protected weatherService: WeatherService, 
				 protected cryptoCurencyService: CryptoCurencyService, 
				 protected breweryService: BreweryService,
				 protected jobsService: JobsService,
				 protected spacexLaunchService: SpacexLaunchService) { }

	ngOnInit() {
		if (!sessionStorage.getItem('AuthToken')) {
			this.router.navigate(['/']);
		}
		this.weatherService.getWeekForecast()
		.subscribe(
		weather => {
			this.weatherDetail = weather;
		});

		this.cryptoCurencyService.getCryptoCurrencies()
		.subscribe(
		crypto => {
			this.cryptoDetail = crypto;
		});
		
		this.breweryService.getBreweries()
		.subscribe(
		brewery => {
			this.breweryDetail = brewery;
		});
		
		this.jobsService.getJobs()
		.subscribe(
		jobs => {
			this.jobsDetail = jobs;
		});
		
		this.spacexLaunchService.getLaunches()
		.subscribe(
		spacexLaunches => {
			this.spacexLaunchDetail = spacexLaunches;
		});
	}
}
