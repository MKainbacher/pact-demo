import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { messageMockInterceptor } from './app/interceptors/message-mock.interceptor';

import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors(
        environment.mockBackendCalls ? [messageMockInterceptor] : []
      )
    ),
    importProvidersFrom(BrowserAnimationsModule),
  ],
});
