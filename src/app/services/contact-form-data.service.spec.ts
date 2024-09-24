import { TestBed } from '@angular/core/testing';

import { ContactFormDataService } from './contact-form-data.service';

describe('ContactFormDataService', () => {
  let service: ContactFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
