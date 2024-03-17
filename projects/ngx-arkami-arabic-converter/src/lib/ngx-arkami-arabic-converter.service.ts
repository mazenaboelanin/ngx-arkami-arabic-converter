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

convertToArabicWords(strNumber: string): string {
  let result = '';
  let length = strNumber.length;
  switch (length) {
    case 7:
      result = this.sevenDigitsToArabic(strNumber);
      break;
    case 6:
      result = this.sixDigitsToArabic(strNumber);
      break;
    case 5:
      result = this.fiveDigitsToArabic(strNumber);
      break;
    case 4:
      result = this.FourDigitsToArabic(strNumber);
      break;
    case 3:
      result = this.threeDigitsToArabic(strNumber);
      break;
    case 2:
      result = this.twoDigitToArabic(strNumber);
      break;
    case 1:
      result = this.oneDigitToArabic(strNumber);
      break;
  }

  return 'فقط ' + result.trim() + (parseInt(strNumber) === 1 ? ' جنيه مصري لا غير' : ' جنيهات مصرية لا غير');
}

sevenDigitsToArabic(strNumber: string): string {
  // million
  let result = '';
  const firstDigit = parseInt(strNumber[0]);
  result += this.millions[firstDigit] + ' ';
  const sixDigits = strNumber.slice(1);
  result += this.sixDigitsToArabic(sixDigits);
  return result;
}


sixDigitsToArabic(strNumber: string): string {
  let result = '';

  const firstThreeDigits = strNumber.slice(0, 3);
  result += this.threeDigitsToArabic(firstThreeDigits) + ' ألف  ';
  const secondThreeDigits = strNumber.slice(3);
  if (secondThreeDigits === '000') {
    result += this.threeDigitsToArabic(secondThreeDigits);
  } else {
    result += ' و ' + this.threeDigitsToArabic(secondThreeDigits);
  }
  return result;
}


fiveDigitsToArabic(strNumber: string): string {
  let result = '';
  const twoDigits = strNumber.slice(0, 2);
  result += this.twoDigitToArabic(twoDigits, false) + ' الفا ';

  const threeDigits = strNumber.slice(2);
  result += this.threeDigitsToArabic(threeDigits);
  return result;
}


FourDigitsToArabic(strNumber: string): string {
  let result = '';
  const firstDigit = parseInt(strNumber[0]);
  result += this.thousands[firstDigit] + ' ';

  const threeDigits = strNumber.slice(1);
  result += this.threeDigitsToArabic(threeDigits);
  return result;
  }


threeDigitsToArabic(strNumber: string): string {
  let result = '';
  const firstDigit = parseInt(strNumber[0]);

  if (firstDigit !== 0) {
    result +=  this.hundreds[firstDigit] + ' و ';
  } else {
    result += this.hundreds[firstDigit] + ' ';
  }

  const twoDigits = strNumber.slice(1);
  result +=  this.twoDigitToArabic(twoDigits, true);
  return result;
}

twoDigitToArabic(strNumber: string, concat:boolean = false): string {
  let result = '';
  let length = strNumber.length;

  for (let i = 0; i < length; i++) {
    let digit = parseInt(strNumber[i]);
    switch (length - i) {
      case 2:
        if (digit === 1 && i < length - 1) {
          // from 11 to 19
          if (parseInt(strNumber[i+1]) === 0) {
            result += this.tens[i+1] + ' ';
          } else {
            result += this.teens[parseInt(strNumber[i + 1])] + ' ';
          }
          i++;
        } else {
          // 20, 21, 30, 40, 50, 60, 70, 80, 90
          if (digit > 0 && digit !== 1 && i < length - 1){
            //  20, 30, 40, 50, 60, 70, 80, 90
            if (parseInt(strNumber[i+1]) === 0) {
              if (concat) {
                result += 'و'  + this.tens[digit] + ' ';
              }else {
                result += this.tens[digit] + ' ';
              }
            } else {
            // 21, 22, 23, 24, 25, 26, 27, 28, 29
            result += this.units[parseInt(strNumber[i+1])] + ' و ' + this.tens[digit] + ' ';
            }
            i++;
          } else {
            // 02, 03, 04, 05, 06, 07, 08, 09
            if (digit === 0) {
              result += this.tens[digit] + ' ';
            } else {
              result += this.tens[digit] + ' و ';
            }
          }
        }
        break;
        case 1:
          if (digit === 0) {
            result += '';
          } else {
            result += 'و'  +  this.oneDigitToArabic(digit.toString());
          }

          break
      }

    }

    return result;
  }


  oneDigitToArabic(strNumber: string): string {
    return  this.units[parseInt(strNumber)] + ' ';
  }

}
