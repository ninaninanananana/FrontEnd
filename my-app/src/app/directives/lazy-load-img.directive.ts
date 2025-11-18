import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appLazyLoadImg]',
  standalone: true
})
export class LazyLoadImgDirective implements AfterViewInit {
  @Input() appLazyLoadImg: string = '';
  @Input() tempBgImgPath: string = '';


  private observer!: IntersectionObserver;
  constructor(

    private el: ElementRef<HTMLElement>,
  ) {
console.log(this.appLazyLoadImg)
  }

  ngAfterViewInit(): void {
    if (this.tempBgImgPath) {
      this.el.nativeElement.style.backgroundImage = `url(${this.tempBgImgPath})`;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage();
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    });

    this.observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    if (this.appLazyLoadImg) {
      this.el.nativeElement.style.backgroundImage = `${
        'url(' +  this.appLazyLoadImg + ')'
      }`;
    }
  }
}
