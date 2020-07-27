import { Directive, Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Directive({
  selector: '[slideInOut]'
})


export class AnimationsDirective {

  animation: any;
  constructor() { }
  ngOnInit() {
    return this.animation = [
      trigger('slideInOut', [
        transition(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
          animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
        ])
      ])
    ]
  }

}
