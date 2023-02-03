import { Component } from '@angular/core';

@Component({
  selector: 'app-name-of-your-file',
  templateUrl: './name-of-your-file.component.html',
  styleUrls: ['./name-of-your-file.component.scss']
})
export class NameOfYourFileComponent {
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
