import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appNewDirective]'
})
export class NewDirectiveDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text is changed by changeText Directive.";
 }

}
