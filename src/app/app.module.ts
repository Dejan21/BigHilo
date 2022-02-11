import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CardComponent } from './card/card.component';
import { BetAreaComponent } from './bet-area/bet-area.component';
import { ResultComponent } from './result/result.component';
import { MorebuttonComponent } from './morebutton/morebutton.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent,
    BetAreaComponent,
    ResultComponent,
    MorebuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
