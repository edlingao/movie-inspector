import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './views/index/index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
