import { Component } from '@angular/core';
import { LazyLoadImgDirective } from '../../directives/lazy-load-img.directive';

@Component({
  selector: 'app-home',
  imports: [LazyLoadImgDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home {
  public homePicList : number[] = [];


  ngOnInit(): void {
    this.init();

  }

  /*初始化*/
  private init():void{
    for (let index = 0; index < 20; index++) {
      this.homePicList.push(index);

    }
  }
}
