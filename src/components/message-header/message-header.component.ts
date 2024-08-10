import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IMessage } from '../../model/message';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss'],
})
export class MessageHeaderComponent implements OnInit {
  // @ViewChild('rank') private rankRef!: ElementRef;
  /** Message */
  @Input() message!: IMessage;
  readonly NUM_OF_STARS = 5;
  readonly NUM_OF_STARS_ARRY = [...Array(this.NUM_OF_STARS).keys()];

  constructor() {}

  ngOnInit(): void {
  }

  public onStarEnter(starContainer: Element, starIndex: number): void {
    const stars: any = starContainer.querySelectorAll('.star');
    console.log(stars);

    if (stars.length > 0) {
      stars.forEach((s: Element, index: number) => {
        s.classList.toggle('full', starIndex >= index);
      });
    } 
  }

  public onStarOut(starContainer: Element, starIndex: number): void {
    const stars: any = starContainer.querySelectorAll('.star');
    console.log(stars);

    if (stars.length > 0) {
      stars.forEach((s: Element, index: number) => {
        if (index === starIndex) {
          s.classList.remove('full');
        }
      });
    } 
  }
}
