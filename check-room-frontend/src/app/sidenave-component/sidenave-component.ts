import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-sidenave-component',
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './sidenave-component.html',
  styleUrl: './sidenave-component.css',
})
export class SidenaveComponent {

}
