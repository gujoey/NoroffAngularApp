import { TestBed, inject } from '@angular/core/testing';

import { CryptoCurencyService } from './crypto-curency.service';

describe('CryptoCurencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoCurencyService]
    });
  });

  it('should be created', inject([CryptoCurencyService], (service: CryptoCurencyService) => {
    expect(service).toBeTruthy();
  }));
});
