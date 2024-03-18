import { NgModule } from '@angular/core';
import { NgxArkamiArabicConverterComponent } from './ngx-arkami-arabic-converter.component';
import { NgxArkamiArabicConverterService } from './ngx-arkami-arabic-converter.service';



@NgModule({
  declarations: [
    NgxArkamiArabicConverterComponent
  ],
  providers: [
    NgxArkamiArabicConverterService
  ],
  imports: [
  ],
  exports: [
    NgxArkamiArabicConverterComponent
  ]
})
export class NgxArkamiArabicConverterModule { }
