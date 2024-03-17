import { Component, Input, OnInit } from '@angular/core';
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
export class NgxArkamiArabicConverterComponent implements OnInit{
  @Input() strNumber: string = '';
  arabicText: string = '';

  constructor(
    private strNumberService: NgxArkamiArabicConverterService
  ) { }

  ngOnInit(): void {
    this.arabicText = this.strNumberService.convertToArabicWords(this.strNumber);
  }


}
