import { TestBed, inject } from '@angular/core/testing';

import { CryptoCurrenciesService } from './crypto-currencies.service';

describe('CryptoCurrenciesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoCurrenciesService]
    });
  });

  it('should be created', inject([CryptoCurrenciesService], (service: CryptoCurrenciesService) => {
    expect(service).toBeTruthy();
  }));
});
