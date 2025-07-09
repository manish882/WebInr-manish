import { Component } from '@angular/core';
 import { Navbar } from "../navbar/navbar";
import { WebinarPage } from '../../pages/webinar-page/webinar-page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [WebinarPage, Navbar,FormsModule, WebinarPage, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
