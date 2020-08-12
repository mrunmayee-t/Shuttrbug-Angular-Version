// scrollprogress.directive.ts
import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appScollprogress]'
})
export class ScollprogressDirective {
  debugger;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";

  }
}
