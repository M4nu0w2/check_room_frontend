import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserServicw } from '../user-servicw';
import { User } from '../interface/interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logincomponent',
  imports: [MatFormFieldModule, FormsModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css',
})
export class Logincomponent implements OnInit {

  utenti: User[] = [];
  email: string = '';
  password: string = '';
  @Output() utente =new EventEmitter<User>  ;

  constructor(private userService: UserServicw, private router:Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

onLogin() {
  
  
    if(this.validateUser( this.password)) {
    this.userService.getUserByEmail(this.email).subscribe({
      next: data=> this.utente.emit(data),
      
      
      error:err=> console.log(err)
    })
    
    this.router.navigate(["/aula"])}
    else{
      this.router.navigate(["/login"])
    }
    
  }

  validateUser( passwordP:string){
    
    for(let i=0; i< this.utenti.length; i++){
      if(passwordP == this.utenti[i].password){
      
        return true
      }
      
  }
  return false
}
  
  loadUsers() {
    this.userService.getAllUser().subscribe({
      next: data => {
      this.utenti = data;   
     
    },
      error: err => console.log(err)

    })
  }
}
