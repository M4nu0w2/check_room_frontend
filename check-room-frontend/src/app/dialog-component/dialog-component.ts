
import { ChangeDetectionStrategy, Component, inject, Inject, Input, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { FormsModule } from '@angular/forms';
import { MatAnchor } from "@angular/material/button";
import { PrenotazioneService } from '../prenotazione-service';
import { Prenotazione, PrenotazioneF } from '../interface/interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog-component',
  imports: [MatDatepickerModule, MatInputModule, MatFormFieldModule, MatTimepickerModule, FormsModule, MatAnchor],
  templateUrl: './dialog-component.html',
  styleUrl: './dialog-component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

  date!: Date;
  startTime!: Date;
  endTime!: Date;
  note!: string;
  readonly dialog = inject(MatDialog);
 


  constructor(private prenotazioneService: PrenotazioneService, @Inject(MAT_DIALOG_DATA) public data: any) { }



  creaPrenotazione() {
  const nuovaPrenotazione: PrenotazioneF = {
    idAula: this.data.aula.id, 
     data: this.date.toISOString().split('T')[0],
    inizio: this.startTime.toString(),
    fine: this.endTime.toString(),
    note: this.note,
  };
  

  this.prenotazioneService.creaPrenotazione(nuovaPrenotazione).subscribe(
    {next: (n)=> this.dialog.closeAll(),
    error:(err)=>console.log(err)}
  );
  
}


}
