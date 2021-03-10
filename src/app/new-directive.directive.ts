import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appNewDirective]'
})
export class NewDirectiveDirective {

  constructor(el: ElementRef) {
    console.log(Element);
    el.nativeElement.innerText = "Text is changed by changeText Directive.";
    el.nativeElement.style.backgroundColor = 'yellow';
 }

}
