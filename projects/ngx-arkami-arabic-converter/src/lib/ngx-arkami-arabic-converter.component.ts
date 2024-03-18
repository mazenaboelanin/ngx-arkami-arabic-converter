import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxArkamiArabicConverterService } from './ngx-arkami-arabic-converter.service';

@Component({
  selector: 'ngx-arkami-arabic-converter',
  template: `
    <p *ngIf="arabicText">
      {{ arabicText }}
    </p>
  `,
  styles: [
  ]
})
export class NgxArkamiArabicConverterComponent implements OnInit, OnChanges{
  @Input() strNumber: string = '';
  arabicText: string = '';

  constructor(
    private ngxArkamiService: NgxArkamiArabicConverterService
  ) { }

  ngOnInit(): void {
    if (this.strNumber){
      this.arabicText = this.ngxArkamiService.convertToArabicWords(this.strNumber);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['strNumber']) {
      this.arabicText = this.ngxArkamiService.convertToArabicWords(this.strNumber);
    }
  }


}
