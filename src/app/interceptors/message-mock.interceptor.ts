import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { messagesResponseMock } from '../mocks/messages.mock';
import { MessagesResponse } from '../models/messages-response';

export const messageMockInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  console.log('[MessageMockInterceptor] Begin interception for url', req.url);
  if (req.url.endsWith('/messages')) {
    return of(
      new HttpResponse<MessagesResponse>({ body: messagesResponseMock })
    );
  }
  return next(req);
};
