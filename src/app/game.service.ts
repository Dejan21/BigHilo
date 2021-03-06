import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  value: any;
  betType: any;
  results:any = [];
  cards: any = [];
  betTypes: any = [];
  number: any;
numbers:any = []
bets:any = []
bet:any;
 lastResult:any;

 public roundStatus = new BehaviorSubject<number>(0)




   round = {
    id: 0,
    result: false, // Result of the round will be card object
    status: 0 //1 is finished, 0 is progress
  }

 
 
  

  constructor() { 

  const numbers = ['2','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
    
  this.numbers = [
    {value: '2',  multiplier: 24, },
    {value: '3',  multiplier: 24, },
    {value: '4',  multiplier: 24, },
    {value: '5',  multiplier: 24, },
    {value: '6',  multiplier: 24, },
    {value: '7',  multiplier: 24, },
    {value: '8',  multiplier: 24, },
    {value: '9',  multiplier: 24, },
    {value: '10',  multiplier: 24, },
    {value: 'J',   },
    {value: 'K',   },
    {value: 'Q',   },
    {value: 'A',   },
    ];
   
   
    this.bets = [
      {value: '1/2',  devided: 1/2, },
      {value: '3',  multiplier: 3, },
      {value: 'x2',  multiplier: 2, },
      {value: 'min',  minus: '-', },
      {value: '0.3',  multiplier: 0.3, },
      {value: '0.5',  multiplier: 0.5, },
      {value: '0.7',  multiplier: 0.7, },
   
     
      ];
  
  const symbols = 
  [
  { symbol: '♠',
  color: 'black',
  key: 'spade',
  letter: 'S'
  },
  {
  symbol: '♥',
  color: 'red',
  key: 'heart',
  letter: 'H'
  },
  {
  symbol: '♦',
  color: 'red',
  key: 'diamonds',
  letter: 'D'
  },
  {
  symbol: '♣',
  color: 'black',
  key: 'clubs',
  letter: 'C'
  }
];



for(let j = 0; j < symbols.length; j++ ) {
  for( let i = 0; i < numbers.length; i++) {
    this.cards.push({
      number: numbers[i],
      symbol: symbols[j].letter,
      color: symbols[j].color,
      key: symbols[j].letter + numbers[i]
    })
  }
}

this.cards.push({
  nubmer: 'JOKER',
  symbol: 'JOKER',
  key: 'JOKER'
});

this.betTypes.push({
  name: 'Hi Lo',
  key: 'HILO',
  multiplier: this.calcMultiplier(1,13),
  options:[]
});

this.betTypes.push({
  name: 'Bet On Card',
  key: 'BETONCARD',
  multiplier: this.calcMultiplier(1,27),
  options: []
});

this.betTypes.push({
  name: 'Bet On Number',
  key: 'BETONNUMBER',
  multiplier: this.calcMultiplier(1, 13),
  options: []
});

this.betTypes.push({
  name: 'Bet On Color',
  key: 'BETONCOLOR',
  multiplier: this.calcMultiplier(1, 13),
  options: []
});

this.betTypes.push({
  name: 'Bet On Integer',
  key: 'BETONINTEGER',
  multiplier: this.calcMultiplier(16, 27),
  options: []
});

this.betTypes.push({
  name: 'Bet On Royals',
  key: 'BETONROYALS',
  multiplier: this.calcMultiplier(8, 27),
  options: []
});

this.betTypes.push({
  name: 'Bet On J or Q',
  key: 'BETONINTEGER',
  multiplier: this.calcMultiplier(4, 27),
  options: []
});

this.betTypes.push({
  name: 'Bet On K or A',
  key: 'BETONINTEGER  ',
  multiplier: this.calcMultiplier(4, 27),
  options: []
});

   console.log(this.betTypes)

 }

    calcMultiplier(n: number, d: number) {
      return Math.floor((d - 1) / n);
    }

    
   gameLoop(){
     const result = this.cards[Math.floor(Math.random() * this.cards.length)] // select random value from the aray
     
     this.results.push(result);
   
     
     
     


    this.lastResult = result

    this.roundStatus.next(0)
    setTimeout(() => {
      this.roundStatus.next(1)
    }, 10000)

  
   }
   
   

   sendData(value: any) {
     this.value = value;
   }
 
  
};






