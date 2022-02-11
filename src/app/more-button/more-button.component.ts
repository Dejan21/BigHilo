import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.css']
})
export class MoreButtonComponent implements OnInit {
 
  @Input() more:any
  button: any;


 @Output() public sendData = new EventEmitter<string>();
 
  constructor() { 
    
    
  }


  ngOnInit(): void {
    this.sendData.emit('Child data!');
  }

}
