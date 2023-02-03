import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  nom: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('/postForm', {
      nom: this.nom,
      email: this.email,
      message: this.message
    }).subscribe((data) => {
      console.log(data);
    });
  }
}
