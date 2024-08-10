import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BoardComponent } from '../components/board/board.component';
import { BrowserModule } from '@angular/platform-browser';
import { MessageBodyComponent } from '../components/message-body/message-body.component';
import { MessageHeaderComponent } from '../components/message-header/message-header.component';
import { UserInfoComponent } from '../components/user-info/user-info.component';
import { UserAvatarComponent } from '../components/user-avatar/user-avatar.component';
import { MessageContentComponent } from '../components/message-content/message-content.component';
import { MessageFooterComponent } from '../components/message-footer/message-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MessageBodyComponent,
    MessageContentComponent,
    MessageFooterComponent,
    MessageHeaderComponent,
    UserAvatarComponent,
    UserInfoComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
