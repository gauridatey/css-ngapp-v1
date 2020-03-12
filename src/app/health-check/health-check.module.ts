import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCheckRoutingModule } from './health-check-routing.module';
import { HealthCheckComponent } from './health-check.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HealthCheckComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HealthCheckRoutingModule
  ]
})
export class HealthCheckModule { }
