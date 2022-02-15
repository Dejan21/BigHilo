import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  activeTab = 1;
  morebutton:any;
  half:any
  min:any;
  low:any;
  high: any;
  numbers:any;
  bet:any;


  @Output() clickEvent = new EventEmitter<any>();

  constructor( public gameService: GameService) { }

  ngOnInit(): void {
    this.gameLoop();
    setInterval(this.gameLoop.bind(this), 10000)
  }


  gameLoop(){
    this.gameService.gameLoop();
  }

  changeActiveTab(id: number){
    this.activeTab = id;
  }

  onClickButton(number:any) {
    console.log(number)
  }
  
  onButtonBet(){
    console.log('bet');
   }

   onHighButton(){
      console.log('high')
   }

   onLowButton(){
    console.log('low')
 }
 
}
