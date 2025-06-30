import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { IconType } from '@angular/material/icon/testing';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,MatToolbarModule,MatButtonModule,MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,RouterModule,],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
menuItems:any[]=[
  
  {
  icon:'home',
  label:'Account',
  route:'account'
  },
   {
  icon:'schedule',
  label:'My-Day',
  route:'my-day'
  },
  {
  icon:'star',
  label:'Important',
  route:'important'
  },
 
 
  {
  icon:'security',
  label:'Security',
  route:'security'
  },
  {
  icon:'personal protection',
  label:'Privacy',
  route:'privacy'
  },
  {
  icon:'home',
  label:'Task',
  route:'task'
  },
 
]
}
