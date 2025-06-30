import { TestBed } from '@angular/core/testing';

import { Sharedtask } from './sharedtask';

describe('Sharedtask', () => {
  let service: Sharedtask;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sharedtask);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
