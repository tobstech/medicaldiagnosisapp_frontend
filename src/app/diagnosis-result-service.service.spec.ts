import { TestBed } from '@angular/core/testing';

import { DiagnosisResultServiceService } from './diagnosis-result-service.service';

describe('DiagnosisResultServiceService', () => {
  let service: DiagnosisResultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosisResultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
