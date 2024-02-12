import { Injectable } from '@angular/core';
import { SECRET } from '../token-secret';
import * as jose from 'jose'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public insertToken(token: string): void {
    localStorage.setItem('token', token);
  }

  //Utilizado para validar se a token no sistema é válida.
  public static async validateToken(): Promise<boolean> {
    const token: string | null = localStorage.getItem('token');

    if (token != null) {
      let isTokenValid: boolean = true;
  
      //Ele puxa a token, e também puxa o SECRET da EEGL, utilizado 
      //para encriptar as tokens
      await jose.jwtVerify(token, new TextEncoder().encode(SECRET))
      .then(decodedJwt => {
        //E por fim, verifica se a data atual é maior que a data de validade
        //da token.
        if (Date.now() >= ((decodedJwt.payload.exp as number) * 1000) ) {
          isTokenValid = false;
        }
      });
  
      return isTokenValid;
    }
  
    return false;
  }

  public destroyToken() {
    localStorage.removeItem('token');
  }
}
