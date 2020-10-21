import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message:String;
  DEFAULT_MESSAGE:String = "ciao";
  constructor(){}

  createHelloMessage(){
    this.message = "Hello!";
  }

  alertMessage(){
    alert(this.message);
  }

  createMessage(message : String){
    this.message = message;
  }
}

