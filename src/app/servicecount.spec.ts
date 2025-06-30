import { TestBed } from '@angular/core/testing';

import { Servicecount } from './servicecount';

describe('Servicecount', () => {
  let service: Servicecount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicecount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
