import { Component, OnInit } from '@angular/core';
import { HealthCheckService } from './health-check.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {
  result: string;

  constructor(private healthCheckService: HealthCheckService, private logger: NGXLogger) {}

  ngOnInit() {
    this.getServerHealthCheck();
  }

  getServerHealthCheck() {
    this.healthCheckService.getServerHealthCheck().subscribe(
      (response: any) => {
        this.logger.debug('Response received from server [' + response.message + ']');
        this.result = response.message;
      },
      () => {}
    );
  }
}
