import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { MessageService } from './message/message.service';
import { AlertMessageService } from './message/alert-message.service';
import { ToastMessageService } from './message/toast-message.service';
import { MessageComponent } from './message/message.component';
import { ExceptionComponent } from './exception/exception.component';
import { ExceptionNotfoundComponent } from './exception/exception-notfound/exception-notfound.component';
import { ExceptionGeneralComponent } from './exception/exception-general/exception-general.component';
import { ExceptionUnauthorizedComponent } from './exception/exception-unauthorized/exception-unauthorized.component';
import { ExceptionForbiddenComponent } from './exception/exception-forbidden/exception-forbidden.component';
import { ExceptionApiserverdownComponent } from './exception/exception-apiserverdown/exception-apiserverdown.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './exception/http-error.interceptor';
import { ConstantService } from './constant.service';

@NgModule({
  declarations: [
    MessageComponent,
    ExceptionComponent,
    ExceptionNotfoundComponent,
    ExceptionGeneralComponent,
    ExceptionUnauthorizedComponent,
    ExceptionForbiddenComponent,
    ExceptionApiserverdownComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    LoggerModule.forRoot({
      level: !environment.production ? NgxLoggerLevel.DEBUG : NgxLoggerLevel.ERROR,
      serverLogLevel: NgxLoggerLevel.OFF
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    ConstantService,
    MessageService,
    AlertMessageService,
    ToastMessageService
  ],

  exports: [MessageComponent]
})
export class SharedModule {}
