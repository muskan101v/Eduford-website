import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @ViewChild('nav')
  nav!: ElementRef;
  title = 'responsive-website';
  faBars = faBars;
  close = faXmark;
  constructor(private renderer: Renderer2) {}
  hideMenu() {
    this.nav.nativeElement.style.right = '-200px';
    // this.renderer.setStyle(this.nav, 'right', '-200px');
  }
  showMenu() {
    this.nav.nativeElement.style.right = '0';
    // this.renderer.setStyle(this.nav, 'right', '0');
  }
}
