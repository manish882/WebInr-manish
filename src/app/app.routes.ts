import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { WebinarPage } from './pages/webinar-page/webinar-page';
import { Skp } from './components/skp/skp';
import { Calendar } from './components/calendar/calendar';
import { Notifications } from './components/notifications/notifications';

export const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'webinar', component: WebinarPage },
  { path: 'skp', component: Skp },
  { path: 'calendar', component: Calendar },
  { path: 'notifications', component: Notifications },
];
