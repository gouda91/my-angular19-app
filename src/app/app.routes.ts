import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';



import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

// Dashboard Pages
import { ProfileComponent } from './pages/profile/profile.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'home', component: HomeComponent },
  
  // Dashboard Routes (Under Dashboard Layout)
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'invoices', component: InvoicesComponent },

    ],
  },

  { path: 'dashboard/messages', component: MessagesComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'login' } // Catch-all for unknown routes
];

