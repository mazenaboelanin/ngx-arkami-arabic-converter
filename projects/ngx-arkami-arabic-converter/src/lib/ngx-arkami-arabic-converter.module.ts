import { NgModule } from '@angular/core';
import { NgxArkamiArabicConverterComponent } from './ngx-arkami-arabic-converter.component';
import { NgxArkamiArabicConverterService } from './ngx-arkami-arabic-converter.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxArkamiArabicConverterComponent
  ],
  providers: [
    NgxArkamiArabicConverterService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxArkamiArabicConverterComponent
  ]
})
export class NgxArkamiArabicConverterModule { }
