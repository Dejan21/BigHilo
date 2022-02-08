import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  
  cards: any = [];
  betTypes: any = [];
  result = [];

  round = {
    id: 0,
    result: false, // Result of the round will be card object
    status: 0 //1 is finished, 0 is progress
  }

  constructor() { 

   

  const numbers = ['2','3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q', 'A'];
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
};

this.cards.push({
  nubmer: 'JOKER',
  symbol: 'JOKER',
  key: 'JOKER'
});

this.betTypes.push({
  name: 'Hi Lo',
  key: 'HILO',
  multiplier: this.calcMultiplier(1,13),
  option:[]
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
     const result = this.cards(Math.random() * this.cards.lenght) // select random value from the aray

     this.round = {
      id: this.round.id + 1,
      result,
      status: 0
    }

    setTimeout(() => {
      this.round.status = 1;
    }, 2000)

   }

};




