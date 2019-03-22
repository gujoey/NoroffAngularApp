import { TestBed, inject } from '@angular/core/testing';

import { SpacexLaunchesService } from './spacex-launches.service';

describe('SpacexLaunchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacexLaunchesService]
    });
  });

  it('should be created', inject([SpacexLaunchesService], (service: SpacexLaunchesService) => {
    expect(service).toBeTruthy();
  }));
});
