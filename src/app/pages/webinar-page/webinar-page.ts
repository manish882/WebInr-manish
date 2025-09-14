import { Component } from '@angular/core';
import { WebinarCard } from '../../components/webinar-card/webinar-card';
import { WebinarTabs } from '../../components/webinar-tabs/webinar-tabs';
 import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webinar-page',
  imports: [CommonModule,WebinarTabs],
  templateUrl: './webinar-page.html',
  styleUrl: './webinar-page.scss'
})
export class WebinarPage {

}
