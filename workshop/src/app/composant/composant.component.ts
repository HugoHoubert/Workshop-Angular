import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './composant.component.html',
  styleUrls: ['./composant.component.sass']
})
export class ComposantComponent {

  nom: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  onSubmit() {
    console.log(this.nom);
    console.log(this.email);
    console.log(this.message);
  }
}
