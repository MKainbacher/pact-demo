jest.mock('./services/message.service');
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MessageService } from './services/message.service';

describe('AppComponent', () => {
  it('should create the app', () => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [MessageService],
    });
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
