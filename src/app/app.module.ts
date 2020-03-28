import { HealthCheckModule } from './health-check/health-check.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HealthCheckModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
