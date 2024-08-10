import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../../model/message';

@Component({
  selector: 'app-message-footer',
  templateUrl: './message-footer.component.html',
  styleUrls: ['./message-footer.component.scss'],
})
export class MessageFooterComponent implements OnInit {
  @Input() message!: IMessage;

  constructor() {}

  ngOnInit(): void {}
}
