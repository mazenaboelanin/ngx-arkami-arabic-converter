# NgxArkamiArabicConverter

An Angular library that takes a string number as a value and returns the arabic text representation of that number.

This library was generated by `Mazen Abo ELanin` with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.


## Installation

To install this library, run:
```bash
npm i ngx-arkami-arabic-converter
```

## Usage

### first Approach: using Service

```javascript
  // import NgxArkamiArabicConverterService in your component
  import { NgxArkamiArabicConverterService } from './ngx-arkami-arabic-converter.service';

  // inject your service in the component constructor
  constructor(
      private ngxArkamiService: NgxArkamiArabicConverterService
    ) {}

  // Use `convertToArabicWords` method and pass the string number to it
  // It will return the text representation
  const arabicTextRepresentation = this.ngxArkamiService.convertToArabicWords(stringNumber);
```

###  Second Approach: using Component
#### import NgxArkamiArabicConverterModule in `app.module.ts`
```javascript
  // import `NgxArkamiArabicConverterModule` in your app.module
  import { NgxArkamiArabicConverterModule } from './ngx-arkami-arabic-converter.service';

  // add `NgxArkamiArabicConverterModule` to your imports 
  @NgModule({
  imports: [
    NgxArkamiArabicConverterModule
  ]
  })
```
#### use ngx-arkami-arabic-converter component to render output

```html
  <!-- use ngx-arkami-arabic-converter component in your html file --> 
  <!-- pass the string number you want to convert to arabic text representation -->
  <!-- the component will display the arabic text representation for you -->
  <ngx-arkami-arabic-converter [strNumber]="inputNumber"></ngx-arkami-arabic-converter>
```

## Build

Run `ng build ngx-arkami-arabic-converter` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-arkami-arabic-converter`, go to the dist folder `cd dist/ngx-arkami-arabic-converter` and run `npm publish`.

## Running unit tests

Run `ng test ngx-arkami-arabic-converter` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Future Plan

- A proper Documentation
- A proper unit tests
