import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxArkamiArabicConverterComponent } from './ngx-arkami-arabic-converter.component';

describe('NgxArkamiArabicConverterComponent', () => {
  let component: NgxArkamiArabicConverterComponent;
  let fixture: ComponentFixture<NgxArkamiArabicConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxArkamiArabicConverterComponent]
    });
    fixture = TestBed.createComponent(NgxArkamiArabicConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
