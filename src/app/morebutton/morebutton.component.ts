import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-morebutton',
  templateUrl: './morebutton.component.html',
  styleUrls: ['./morebutton.component.css']
})
export class MorebuttonComponent implements OnInit {
 
  morebutton:any;

  @Output() clickEvent = new EventEmitter<any>();

  constructor() { 

    
  };

  ngOnInit(): void {
  }

  onButtonClick(){
   this.clickEvent.emit()
  }

}
