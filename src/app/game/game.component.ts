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
  button:any;
  selectedbet:any;
  roundStatus:any;


 

  constructor( public gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.roundStatus.subscribe(value => {this.roundStatus=value});

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
    this.gameService.bet=this.selectedbet
   
   }

   onHighButton(){
      console.log('high')
   }

   onLowButton(){
    console.log('low')
 }
 
 joker(){
   
 }
 selectbet(bet:any){
    this.selectedbet=bet;
 }

}
