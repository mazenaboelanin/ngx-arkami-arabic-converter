import { Component, Input, OnInit } from '@angular/core';
import { NgxArkamiArabicConverterService } from './ngx-arkami-arabic-converter.service';

@Component({
  selector: 'ngx-arkami-arabic-converter',
  template: `
    <p>
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
    private ngxArkamiService: NgxArkamiArabicConverterService
  ) { }

  ngOnInit(): void {
    this.arabicText = this.ngxArkamiService.convertToArabicWords(this.strNumber);
  }


}
