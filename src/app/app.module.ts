import { HealthCheckModule } from './health-check/health-check.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HealthCheckModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
