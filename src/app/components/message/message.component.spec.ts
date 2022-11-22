import { TestBed } from '@angular/core/testing';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      imports: [MessageComponent],
    });
    const fixture = TestBed.createComponent(MessageComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});
