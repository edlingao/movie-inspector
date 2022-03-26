import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './views/movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TableComponent } from './components/table/table.component';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './components/menu/menu.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';


@NgModule({
  declarations: [
    IndexComponent,
    TableComponent,
    MenuComponent,
    AppComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
