import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor( public gameService: GameService) { }

  ngOnInit(): void {
    this.gameLoop();
    setInterval(this.gameLoop.bind(this), 6000)
  }

  gameLoop(){
    this.gameService.gameLoop();
  }

}
