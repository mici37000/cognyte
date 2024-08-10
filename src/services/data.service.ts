import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMessage } from '../model/message';
import { getMessages } from '../mock/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public getMessages(): Observable<IMessage[]> {
    // ToDo: Replace this with api request to java service
    return of(getMessages());
  }
}
