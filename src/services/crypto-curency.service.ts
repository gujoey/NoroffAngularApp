import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CryptoCurencyService {
  private url = 'https://api.coinranking.com/v1/public/coins';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) { }

  getCryptoCurrencies(): Observable<any[]> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json().data.coins;
      })
    );
  }
}
