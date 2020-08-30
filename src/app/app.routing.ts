import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { TablesComponent } from './pages/tables/tables.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { StocksinfoComponent } from './pages/stocksinfo/stocksinfo.component';


const routes: Routes =[
  {
    path: '',
    //redirectTo: 'dashboard',
    redirectTo: 'stocksinfo',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: 'stock', component: UserProfileComponent,
  },
  {
    path: 'stocksin', component: StocksinfoComponent,
  },
  {
    path: 'navbar', component: NavbarComponent,
  },
  {
    path: 'prof', component: UserProfileComponent,
  }, 
  {
    path: 'tab', component: TablesComponent,
  }, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
   
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }