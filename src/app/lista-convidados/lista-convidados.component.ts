import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lista } from './lista';

@Component({
  selector: 'app-lista-convidados',
  templateUrl: './lista-convidados.component.html',
  styleUrls: ['./lista-convidados.component.scss']
})
export class ListaConvidadosComponent implements OnInit {

  newList: Lista = {} as Lista;
  lista: Lista[] = [];

  saveData(myForm: NgForm) {
    this.lista.push(this.newList);
    this.newList = {} as Lista;
    myForm.resetForm();
  }

  deleteButton() {
    console.log("test")
  }

  emailMask(email: string) {
    var maskedEmail = email.replace(/([^@\.])/g, "*").split('')
    var previous = "..."

    for(let i=0; i<maskedEmail.length; i++){
      if (i<=1 || previous == "." || previous == "@"){
        maskedEmail[i] = email[i];
      }
      previous = email[i];
    }
    return maskedEmail.join('');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
