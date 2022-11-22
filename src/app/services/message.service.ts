import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Message } from '../models/message';
import { MessagesResponse } from '../models/messages-response';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  public constructor(
    private readonly configuration: ConfigurationService,
    private readonly http: HttpClient
  ) {}

  public getMessages(): Observable<Array<Message>> {
    const url: string = `${this.configuration.backendUrl}/messages`;

    return this.http
      .get<MessagesResponse>(url)
      .pipe(map((response) => response.messages));
  }
}
