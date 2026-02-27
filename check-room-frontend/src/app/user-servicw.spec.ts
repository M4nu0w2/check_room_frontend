import { TestBed } from '@angular/core/testing';

import { UserServicw } from './user-servicw';

describe('UserServicw', () => {
  let service: UserServicw;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicw);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
