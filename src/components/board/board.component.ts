import { Component, OnInit } from '@angular/core';
import { IMessage } from '../../model/message';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  messages!: IMessage[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMessages().subscribe(
      (messages: IMessage[]) => {
        this.messages = messages;
        console.log(this.messages);
      },
      (err: Error) => {
        console.error(err);
      }
    );
  }

  /**
   * Track by message id method
   * @param index Message index
   * @param message Message
   */
  trackByMessageId(index: number, message: IMessage): number {
    return message.id;
  }
}
