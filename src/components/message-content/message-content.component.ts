import { Component, Input, OnInit } from '@angular/core';
import { MessageData } from '../../model/message-data';

@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.scss'],
})
export class MessageContentComponent implements OnInit {
  @Input() messageData!: MessageData;

  constructor() {}

  ngOnInit(): void {}
}
