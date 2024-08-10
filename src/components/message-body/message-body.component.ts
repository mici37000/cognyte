import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../../model/message';

@Component({
  selector: 'app-message-body',
  templateUrl: './message-body.component.html',
  styleUrls: ['./message-body.component.scss'],
})
export class MessageBodyComponent implements OnInit {
  /** Message */
  @Input() message!: IMessage;

  constructor() {}

  ngOnInit(): void {}
}
