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

sevenDigitsToArabic(strN: string): string {
  // million
  let result = '';
  let length = strN.length;
  for (let i = 0; i < length; i++) {
    let digit = parseInt(strN[i]);

    // 2209000 DONE
    // 2000000 DONE
    // 2000002 DONE
    // 2000012 DONE
    // 2100021 DONE
    // 2100121 DONE
    // 2150121 DONE
    switch (length - i) {
      case 7:
        result += this.millions[digit] + ' ';
        break;
      case 6:
        const sixDigits = strN.slice(1);
        console.log('sixDigits: ', strN.slice(1));
        result += this.sixDigitsToArabic(sixDigits);
        break;
    }
  }

  return result;
}

sixDigitsToArabic(strN: string): string {
  let result = '';
  let length = strN.length;
  for (let i = 0; i < length; i++) {
    let digit = parseInt(strN[i]);
    // 200000 DONE
    // 200002 DONE
    // 200012 DONE
    // 210021 DONE
    // 210121 DONE
    // 215121 DONE

    // 209000

    switch (length - i) {
      case 6:
        const firstThreeDigits = strN.slice(0, 3);
        result += this.threeDigitsToArabic(firstThreeDigits) + ' ألف  ';
        console.log('firstThreeDigits: ', strN.slice(0, 3));
        break;
      case 3:
        const secondThreeDigits = strN.slice(3);

        if (secondThreeDigits === '000') {
          result += this.threeDigitsToArabic(secondThreeDigits);
          console.log('secondThreeDigits: ',secondThreeDigits);
        } else {
          result += ' و ' + this.threeDigitsToArabic(secondThreeDigits);
        }
        break;
    }
  }

  return result;
}


fiveDigitsToArabic(strN: string): string {
  let result = '';
  let length = strN.length;
  for (let i = 0; i < length; i++) {
    let digit = parseInt(strN[i]);

    // 20000 DONE
    // 20002 DONE
    // 20012 DONE
    // 21021 DONE
    // 21121 DONE

    switch (length - i) {
      case 5:
        const twoDigits = strN.slice(0, 2);
        result += this.twoDigitToArabic(twoDigits) + ' الفا ';
        break;
      case 3:
        const threeDigits = strN.slice(2);
        console.log('threeDigits: ', strN.slice(2));
        result += this.threeDigitsToArabic(threeDigits);
        break;
    }
  }

  return result;
}


FourDigitsToArabic(strN: string): string {
  let result = '';
  let length = strN.length;
  for (let i = 0; i < length; i++) {
    let digit = parseInt(strN[i]);

    // 1000 DONE
    // 1002 DONE
    // 1012 DONE
    // 1021 DONE
    // 1121 DONE

    switch (length - i) {
      case 4:
        result += this.thousands[digit] + ' ';
        break;
      case 3:
        const threeDigits = strN.slice(1);
        result += this.threeDigitsToArabic(threeDigits);
        break;
    }
  }

    return result;
  }


threeDigitsToArabic(strN: string): string {
  let result = '';
  let length = strN.length;
  console.log('THREEDIGITSS/// : ' , strN);
  for (let i = 0; i < length; i++) {
    let digit = parseInt(strN[i]);
    // 012 DONE
    // 100 DONE
    // 102 DONE
    // 112 DONE
    // 121 DONE
    // 110 DONE

    switch (length - i) {
      case 3:
        result += this.hundreds[digit] + ' ';
        break;
      case 2:
        const twoDigits = strN.slice(1);
        result += this.twoDigitToArabic(twoDigits);
        break;
    }
    }

    return result;
  }

  twoDigitToArabic(strN: string): string {
    let result = '';
    let length = strN.length;

    for (let i = 0; i < length; i++) {
      let digit = parseInt(strN[i]);
      switch (length - i) {
        case 2:
          if (digit === 1 && i < length - 1) {
            // from 11 to 19
            console.log('parseInt(i): ', parseInt(strN[i]));

            console.log('parseInt(strN[i+1]): ', parseInt(strN[i+1]));
            if (parseInt(strN[i+1]) === 0) {
              result += this.tens[i+1] + ' ';
            } else {
              result += this.teens[parseInt(strN[i + 1])] + ' ';
            }
            i++;
          } else {
            // 20, 21, 30, 40, 50, 60, 70, 80, 90
            if (digit > 0 && digit !== 1 && i < length - 1){
              //  20, 30, 40, 50, 60, 70, 80, 90
              if (parseInt(strN[i+1]) === 0) {
                result += 'و'  + this.tens[digit] + ' ';
              } else {
              // 21, 22, 23, 24, 25, 26, 27, 28, 29
              result += this.units[parseInt(strN[i+1])] + ' و ' + this.tens[digit] + ' ';
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


  oneDigitToArabic(strN: string): string {
    return  this.units[parseInt(strN)] + ' ';
  }


}
