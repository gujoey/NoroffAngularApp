import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private url = 'https://jobs.github.com/positions.json';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';


  constructor(private http: Http) {
   }

  getJobs(): Observable<any[]> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
