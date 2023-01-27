import { TestBed } from '@angular/core/testing';
import { APP_CONFIG } from '../app.module';
import { TestService } from './test-service';

describe('TestService', () => {
  let service: TestService;

  const configProvider = {
    provide: APP_CONFIG,
    useValue: {
      production: true,
      errorRoute: 'error',
      country: 'ES',
      location: 'Madrid',
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [configProvider],
    });

    service = TestBed.inject(TestService);
  });

  it('check config exists', () => {
    const config = service.getConfig();
    expect(config).toBe(configProvider.useValue);
  })
});
