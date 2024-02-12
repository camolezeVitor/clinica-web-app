import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../security/guard/auth.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => 
    import('./clinic/main-menu/main-menu.module').then(mod => mod.MainMenuModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
