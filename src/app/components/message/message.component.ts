import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Message } from '../../models/message';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    // Modules
    MatListModule,
  ],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() public message!: Message;
}
