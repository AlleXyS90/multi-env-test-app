import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { APP_CONFIG } from './app.module';

describe('AppComponent', () => {
  let fixture;
  let component: AppComponent;

  const configProvider = {
    provide: APP_CONFIG,
    useValue: {
      production: false,
      errorRoute: 'error',
      country: 'ES',
      location: 'Madrid',
    },
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [configProvider],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
