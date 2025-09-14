import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 import { NgbAccordionBody, NgbAccordionHeader, NgbAccordionItem, NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { WebinarPage } from './pages/webinar-page/webinar-page';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { AppLoader } from './shared/app-loader/app-loader';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, RouterOutlet,AppLoader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
      }
    });
  }
}
