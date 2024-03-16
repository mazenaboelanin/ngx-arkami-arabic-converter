import { TestBed } from '@angular/core/testing';

import { NgxArkamiArabicConverterService } from './ngx-arkami-arabic-converter.service';

describe('NgxArkamiArabicConverterService', () => {
  let service: NgxArkamiArabicConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxArkamiArabicConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
