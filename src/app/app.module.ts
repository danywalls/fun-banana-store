import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxBananaUiModule } from 'ngx-banana-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBananaUiModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
