import { state } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {User} from 'src/app/app.component'



@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

@Input() model:User;
@Input() validation:boolean;
@Output() cardState = new EventEmitter<any>();

toggle = false;

sendState(){
  if(!this.validation){
    this.toggle = true

  }else {this.toggle=false}
  let state = {id:this.model.id , toggle:this.toggle}
  this.cardState.emit(state)


}



}
