import { TestBed } from '@angular/core/testing';

import { KaminoCodeFormService } from './kamino-code-form.service';

describe('KaminoCodeFormService', () => {
  let service: KaminoCodeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaminoCodeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
