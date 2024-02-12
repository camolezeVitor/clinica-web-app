import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TokenService } from '../security/token/token.service';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';

const initializeAppFactory = (primeConfig: PrimeNGConfig) => () => {
  // ......
  primeConfig.ripple = true;
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SideBarComponent,
    HeaderComponent,
  ],
  providers: [
    TokenService,
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
