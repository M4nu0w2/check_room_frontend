import { Component, Input, OnInit, inject } from '@angular/core';
import { AulaService } from '../aula-service';
import { Aula, Prenotazione } from '../interface/interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PrenotazioneService } from '../prenotazione-service';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog-component/dialog-component';
import { DialogRef } from '@angular/cdk/dialog';
import { Logincomponent } from "../logincomponent/logincomponent";
@Component({
  selector: 'app-aula-component',
  imports: [MatButtonModule, MatCardModule, MatDialogModule, Logincomponent],
  templateUrl: './aula-component.html',
  styleUrl: './aula-component.css',
})


export class AulaComponent implements OnInit {

  aule: Aula[] = [];
  prenotazione!: Prenotazione;
  constructor(private aulaService: AulaService, private prenotazioneService: PrenotazioneService) { }
  readonly dialog = inject(MatDialog);
  date!: Date;
  startTime!: Date;
  endTime!: Date;
  note!: string;


  ngOnInit() {
    this.loadAule();
  }

  openDialog(aula:Aula): void {
    const dialogRef = this.dialog.open(DialogComponent, { data: {aula:aula} })
    
    
    }

  loadAule() {
    this.aulaService.getAll().subscribe({
      next: res => this.aule = res,
      error: err => console.error(err)
    });
  }



}
