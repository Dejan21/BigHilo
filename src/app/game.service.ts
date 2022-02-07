import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cards: any = [];
  betTypes: any = [];
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
});

this.betTypes.push({
  name: 'Main',
  key: 'MAIN',
  options: []
});

this.betTypes.push({
  name: 'More',
  key: 'MORE',
  options: []
});

console.log(this.cards);

  }
}
