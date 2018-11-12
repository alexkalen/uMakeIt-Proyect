import { TestBed, inject } from '@angular/core/testing';

import { SushirollsService } from './sushirolls.service';

describe('SushirollsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SushirollsService]
    });
  });

  it('should be created', inject([SushirollsService], (service: SushirollsService) => {
    expect(service).toBeTruthy();
  }));
});
