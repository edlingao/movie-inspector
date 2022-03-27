import { TestBed } from '@angular/core/testing';

import { UploadFormService } from './upload-form.service';

describe('UploadFormService', () => {
  let service: UploadFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
