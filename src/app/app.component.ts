import { Component, OnInit } from '@angular/core';
import { TokenService } from '../security/token/token.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'default-project';
  //Como o próprio nome dis, isso é um teste seu animal.
  private tokenDeTeste: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJFRUdMc29mdHdhcmVzIiwiaWF0IjoxNzA2NzMwMjU0LCJleHAiOjE3MzgyNjYyNTQsImF1ZCI6IlRpcm9EZUd1ZXJyYSIsInN1YiI6Im1hdGhldXNzYWxlaEBnbWFpbC5jb20iLCJpZCI6ImJjNDIzODc1LTA1NzItNDUwMy1hMzlhLTM0MTBlZjRjZmU5NCIsIm5vbWUiOiJNYXRoZXVzIFNhbGVoIiwidGlwbyI6IkZ1bmNpb27DoXJpbyIsInJvbGUiOlsiVVNFUiIsIkFETUlOIl19.QGrdM8FNyJz0FNi87t_0fjOaYD6YKjmMpQiBAIGdJXo";
  
    constructor(private token: TokenService) {
    //Tirar isso pro componente de login depois.
    token.insertToken(this.tokenDeTeste);
  }

  ngOnInit(): void {    
  }  

}
