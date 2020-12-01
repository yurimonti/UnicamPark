import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  private name:String;
  private surname:String;

  constructor() {}

  ngOnInit() {
  }

  public setName(){
    this.name = document.getElementById("Nome")[0].value;
  }

  public setSurname(surname:String){
    this.surname = surname;
  }

  public stampaLog(){
    alert(this.name);
  }

}
