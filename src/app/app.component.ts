import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NEVER, Observable } from 'rxjs';

import { MessageComponent } from './components/message/message.component';
import { Message } from './models/message';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Modules
    MatCardModule,
    MatDividerModule,
    MatListModule,
    // Directives
    NgFor,
    NgIf,
    // Pipes
    AsyncPipe,
    // Components
    MessageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public messages$: Observable<Array<Message>> = NEVER;

  public constructor(private readonly messageService: MessageService) {}

  public ngOnInit(): void {
    this.messages$ = this.messageService.getMessages();
  }
}
