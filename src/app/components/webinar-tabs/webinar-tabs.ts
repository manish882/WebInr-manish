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
activeTab: 'ForYou' | 'Live' | 'Upcoming' = 'ForYou';

 webinars = [
  {
    id: 'm1',
    org: 'PDGI Indonesia',
    followers: '2845',
    sponsor: 'Roche',
    timeAgo: '30 min ago',
    avatar: 'assets/imageBanner.png',
    banner: 'assets/image.png',
    isLive: true,
    viewers: 800,
    duration: '24:50',
    credits: '1.5 Credits',
    creditsExpiry: '(Expiring in 23h 30m)',
    title: 'Perspectives in The Covid19 Management of Parox Health caretine',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 750
  },
  {
    id: 'm2',
    org: 'PDGI Indonesia',
    followers: '2845',
    sponsor: 'Roche',
    timeAgo: '30 min ago',
    avatar: 'assets/imageBanner.png',
    banner: 'assets/image.png',
    isLive: false,
    viewers: 0,
    duration: '00:00',
    credits: '1.5 Credits',
    creditsExpiry: '(Expiring in 12 days)',
    title: 'Future of RSV Prevention and Advances in Asthma',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 824
  },
  {
    id: 'm3',
    org: 'PDGI Indonesia',
    followers: '2845',
    sponsor: 'Roche',
    timeAgo: '30 min ago',
    avatar: 'assets/imageBanner.png',
    banner: 'assets/image.png',
    isLive: true,
    viewers: 800,
    duration: '24:50',
    credits: '1.5 Credits',
    creditsExpiry: '(Expiring in 23h 30m)',
    title: 'Perspectives in The Covid19 Management of Parox Health caretine',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 750
  },
    {
    id: 'm1',
    org: 'PDGI Indonesia',
    followers: '2845',
    sponsor: 'Roche',
    timeAgo: '30 min ago',
    avatar: 'assets/imageBanner.png',
    banner: 'assets/image.png',
    isLive: true,
    viewers: 800,
    duration: '24:50',
    credits: '1.5 Credits',
    creditsExpiry: '(Expiring in 23h 30m)',
    title: 'Perspectives in The Covid19 Management of Parox Health caretine',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 750
  },
  {
    id: 'm2',
    org: 'PDGI Indonesia',
    followers: '2845',
    sponsor: 'Roche',
    timeAgo: '30 min ago',
    avatar: 'assets/imageBanner.png',
    banner: 'assets/image.png',
    isLive: false,
    viewers: 0,
    duration: '00:00',
    credits: '1.5 Credits',
    creditsExpiry: '(Expiring in 12 days)',
    title: 'Future of RSV Prevention and Advances in Asthma',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 824
  },
  {
    id: 'm3',
    org: 'PDGI Indonesia',
    followers: '2845',
    sponsor: 'Roche',
    timeAgo: '30 min ago',
    avatar: 'assets/imageBanner.png',
    banner: 'assets/image.png',
    isLive: true,
    viewers: 800,
    duration: '24:50',
    credits: '1.5 Credits',
    creditsExpiry: '(Expiring in 23h 30m)',
    title: 'Perspectives in The Covid19 Management of Parox Health caretine',
    highlights: 'Manage chronic and complex diseases',
    likes: 20,
    comments: 12,
    views: 750
  },

];


}
