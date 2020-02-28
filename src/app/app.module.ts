import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalenderComponent } from './Admin/calender/calender.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
