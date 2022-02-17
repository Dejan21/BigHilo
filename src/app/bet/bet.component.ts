import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.clickEvent.emit()
   }

}
