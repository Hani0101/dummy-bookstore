import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' }, paused: true });

  ngAfterViewInit(): void {
    const open = document.querySelector('.container') as HTMLElement;
    const close = document.querySelector('.close') as HTMLElement;

    this.tl
      .to('nav', { right: 0 })
      .to('nav', { height: '100vh' }, '-=.1')
      .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: 0.2 }, '-=.8')
      .to('.close', { opacity: 1, pointerEvents: 'all' }, '-=.8')
      .to('nav h2', { opacity: 1 }, '-=1');

    open.addEventListener('click', () => {
      if (this.tl.reversed()) {
        this.tl.play();
      } else {
        this.tl.play(0);
      }
    });

    close.addEventListener('click', () => {
      this.tl.reverse();
    });
  }
}
