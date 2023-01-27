import { Component, OnInit } from '@angular/core';
import { AppConfig } from './app-config';
import { TestService } from './services/test-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'multi-env-test-app';
  config: AppConfig;

  constructor(private testService: TestService) {
    this.config = this.testService.getConfig();
    console.log(this.config);
  }

  ngOnInit(): void {}
}
