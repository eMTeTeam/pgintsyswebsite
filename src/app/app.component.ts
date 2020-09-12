import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import jump from 'jump.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PG InitSys';
  ariaExpanded: boolean = false;
  windowScrolled: boolean = false;

  services: Array<any> = [];
  trainings: Array<any> = [];

  constructor() {
    this.loadServices();
    this.loadTrainings();
  }

  ngOnInit() {
    AOS.init({ duration: 1000, once: true });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll = ($event: any) => {
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (verticalOffset > 100) {
      document.getElementById("mainNav").classList.add('navbar-shrink');
      this.windowScrolled = true;
    } else if (this.windowScrolled && verticalOffset < 10) {
      this.windowScrolled = false;
      document.getElementById("mainNav").classList.remove('navbar-shrink');
    }
  }

  clickMenu = () => {
    this.ariaExpanded = !this.ariaExpanded;
  }

  scrollToTarget = (target: string) => {
    const menuButtonElement = document.getElementById("menu-button");
    menuButtonElement.classList.add('collapsed');
    menuButtonElement.setAttribute("aria-expanded", "false");
    document.getElementById("navbarMenuContent").classList.remove('show');

    let offset = -10;
    if (target === '.careerTarget') {
      offset = -50;
    }

    this.ariaExpanded = false;
    jump(target, {
      offset: offset
    });
  }

  scrollToTop = () => {
    jump('.headerTarget');
  }

  loadServices = () => {
    this.services = [
      { icon: 'ion-ios-world-outline', title: 'Mobile & Web Development', caption: 'Mobile & Web Development' },
      { icon: 'ion-ios-paper-outline', title: 'Data Science', caption: 'Data Science' },
      { icon: 'ion-ios-grid-view-outline', title: 'IOT (Rename Embed)', caption: 'IOT (Rename Embed)' },
      { icon: 'ion-ios-cloud-outline', title: 'Cloud Computing', caption: 'Cloud Computing' },
      { icon: 'ion-ios-locked-outline', title: 'Cybersecurity & Block chain', caption: 'Cybersecurity & Block chain' },
      { icon: 'ion-ios-color-wand-outline', title: 'Digital Transformation IR4.0', caption: 'Digital Transformation IR4.0' },
      { icon: 'ion-ios-barcode-outline', title: 'Information Security Management', caption: 'Information Security Management' },
      { icon: 'ion-ios-speedometer-outline', title: 'Cost Reduction & Process Improvement', caption: 'Cost Reduction & Process Improvement' },
      { icon: 'ion-ios-navigate-outline', title: 'Robot and Drone', caption: 'Robot and Drone' }
    ];
  }

  loadTrainings = () => {
    this.trainings = [
      { icon: 'ion-ios-analytics-outline', title: 'IR4.0 opportunities and challenges', caption: 'IR4.0 opportunities and challenges' },
      { icon: 'ion-ios-analytics-outline', title: 'IOT & Robotic System', caption: 'IOT & Robotic System' },
      { icon: 'ion-ios-analytics-outline', title: 'Program Logic Controller', caption: 'Program Logic Controller' },
      { icon: 'ion-ios-analytics-outline', title: 'Arduino/ Raspberry PI', caption: 'Arduino/ Raspberry PI' },
      { icon: 'ion-ios-analytics-outline', title: '3D Design and Printer', caption: '3D Design and Printer' },
      { icon: 'ion-ios-analytics-outline', title: 'AI & Python', caption: 'AI & Python' },
      { icon: 'ion-ios-analytics-outline', title: 'Java Development', caption: 'Java Development' },
      { icon: 'ion-ios-analytics-outline', title: 'Lean Six Sigma', caption: 'Lean Six Sigma' },
      { icon: 'ion-ios-analytics-outline', title: 'Marketing, Leadership etc ', caption: 'Marketing, Leadership etc ' }
    ];
  }

}
