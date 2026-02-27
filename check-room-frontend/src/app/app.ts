import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidenaveComponent } from './sidenave-component/sidenave-component';

import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet,SidenaveComponent,MatSidenavModule,MatButtonModule,MatFormFieldModule],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('check-room-frontend');
}
