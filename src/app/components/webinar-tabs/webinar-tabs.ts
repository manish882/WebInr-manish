import { Component } from '@angular/core';
import { WebinarCard } from '../webinar-card/webinar-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-webinar-tabs',
  imports: [CommonModule,WebinarCard],
  templateUrl: './webinar-tabs.html',
  styleUrl: './webinar-tabs.scss'
})
export class WebinarTabs {
activeTab: 'ForYou' | 'Live' | 'Upcoming' = 'Upcoming';

  webinars = [
    {
      org: 'PDGI Indonesia',
      sponsor: 'Roche',
      timeAgo: '30 min ago',
      banner: 'https://picsum.photos/600/250?random=1',
      credits: '1.5 Credits (Expiring in 12 days)',
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
      goLive: '7 Jan 2025, 12:30 PM',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      watching: 824
    },
    {
      org: 'PDGI Indonesia',
      sponsor: 'Roche',
      timeAgo: '30 min ago',
      banner: 'https://picsum.photos/600/250?random=2',
      credits: '1.5 Credits (Expiring in 12 days)',
      title: 'Future of RSV Prevention and Advances in Asthma',
      goLive: '7 Jan 2025, 12:30 PM',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      watching: 824
    },{
      org: 'PDGI Indonesia',
      sponsor: 'Roche',
      timeAgo: '30 min ago',
      banner: 'https://picsum.photos/600/250?random=3',
      credits: '1.5 Credits (Expiring in 12 days)',
      title: 'New Perspectives in The Covid19 Management of Parox Health caretine',
      goLive: '7 Jan 2025, 12:30 PM',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      watching: 824
    },
    {
      org: 'PDGI Indonesia',
      sponsor: 'Roche',
      timeAgo: '30 min ago',
      banner: 'https://picsum.photos/600/250?random=4',
      credits: '1.5 Credits (Expiring in 12 days)',
      title: 'Future of RSV Prevention and Advances in Asthma',
      goLive: '7 Jan 2025, 12:30 PM',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      watching: 824
    }
  ];


}
