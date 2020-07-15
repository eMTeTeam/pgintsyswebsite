import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website';


  ngOnInit() {
    AOS.init({ duration: 1000, once: true });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;

    if (verticalOffset > 90) {
      document.getElementById("mainNav").classList.add('navbar-shrink');
    } else {
      document.getElementById("mainNav").classList.remove('navbar-shrink');
    }
  }
}
