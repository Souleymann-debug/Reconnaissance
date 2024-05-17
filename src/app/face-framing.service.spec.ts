import { TestBed } from '@angular/core/testing';

import { FaceFramingService } from './face-framing.service';

describe('FaceFramingService', () => {
  let service: FaceFramingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceFramingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
