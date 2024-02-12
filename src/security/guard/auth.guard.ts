import { CanActivateFn } from '@angular/router';
import { SECRET } from '../token-secret';
import * as jose from 'jose'
import { TokenService } from '../token/token.service';

/**
 * @author Vitão_ 
 * 
 * @description
 * Utilizado para verificar se o usuário está logado.
 * 
 * Caso o usuário não esteja logado, ele vai barrar ele de acessar
 * os componentes, redirecionando-o para a pagina de Login.
 */
export const authGuard: CanActivateFn = async (route, state) => {
  return TokenService.validateToken().then((result) => {return result})
};
