import { Directive, ElementRef, Renderer2 } from '@angular/core';

import { SharedService } from './shared.service';

@Directive({
  selector: '.login-form-container',
})
export class LoginFormContainerDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.getLoginFormActive().subscribe((isActive) => {
      if (isActive) {
        this.renderer.addClass(this.elementRef.nativeElement, 'active');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'active');
      }
    });


    this.sharedService.getLoginFormActive().subscribe((isActive) => {
      const loginFormContainer = this.elementRef.nativeElement;
      const dashboardBackground = document.querySelector('.home');
      if (isActive) {
        this.renderer.addClass(loginFormContainer, 'active');
        this.renderer.addClass(dashboardBackground, 'blur-background');
      } else {
        this.renderer.removeClass(loginFormContainer, 'active');
        this.renderer.removeClass(dashboardBackground, 'blur-background');
      }
    });
  }


}
