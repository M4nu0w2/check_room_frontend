import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDrawer } from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home-component',
  imports: [MatCardModule,  MatSidenavModule, MatButtonModule, RouterModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
