import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxArkamiArabicConverterService {
  private units = ['صفر', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
  private tens = ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
  private hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
  private thousands = ['', 'ألف', 'ألفان', 'ثلاثة آلاف', 'أربعة آلاف', 'خمسة آلاف', 'ستة آلاف', 'سبعة آلاف', 'ثمانية آلاف', 'تسعة آلاف'];
  private millions = ['', 'مليون', 'مليونان', 'ثلاثة ملايين', 'أربعة ملايين', 'خمسة ملايين', 'ستة ملايين', 'سبعة ملايين', 'ثمانية ملايين', 'تسعة ملايين'];
  private teens = ['', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];

constructor() { }

convertToArabicWords(strN: string): string {
  let result = '';
  let length = strN.length;
  switch (length) {
    case 7:
      result = this.sevenDigitsToArabic(strN);
      break;
    case 6:
      result = this.sixDigitsToArabic(strN);
      break;
    case 5:
      result = this.fiveDigitsToArabic(strN);
      break;
    case 4:
      result = this.FourDigitsToArabic(strN);
      break;
    case 3:
      result = this.threeDigitsToArabic(strN);
      break;
    case 2:
      result = this.twoDigitToArabic(strN);
      break;
    case 1:
      result = this.oneDigitToArabic(strN);
      break;
  }

  return 'فقط ' + result.trim() + (parseInt(strN) === 1 ? ' جنيه مصري لا غير' : ' جنيهات مصرية لا غير');
}

}
