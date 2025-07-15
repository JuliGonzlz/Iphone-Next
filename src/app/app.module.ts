import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IphoneListComponent } from './iphone-list/iphone-list.component';
import { FormsModule } from '@angular/forms';
import { PhonesIphoneComponent } from './phones-iphone/phones-iphone.component';
import { PhonesCartComponent } from './phones-cart/phones-cart.component';
import { PhonesAboutComponent } from './phones-about/phones-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IphoneListComponent,
    PhonesIphoneComponent,
    PhonesCartComponent,
    PhonesAboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
