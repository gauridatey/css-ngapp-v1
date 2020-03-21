import { ConstantService } from './constant.service';
import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { MessageService } from './message/message.service';
import { AlertMessageService } from './message/alert-message.service';
import { ToastMessageService } from './message/toast-message.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    LoggerModule.forRoot({
      level: !environment.production ? NgxLoggerLevel.DEBUG : NgxLoggerLevel.ERROR,
      serverLogLevel: NgxLoggerLevel.OFF
    })
  ],
  providers: [MessageService, AlertMessageService, ToastMessageService, ConstantService],
  exports: [MessageComponent]
})
export class SharedModule {}
