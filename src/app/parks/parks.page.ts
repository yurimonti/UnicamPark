import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.page.html',
  styleUrls: ['./parks.page.scss'],
})
export class ParksPage implements OnInit {
  private port:string;
  private url:string;

  constructor(private http:HttpClient){
    this.url ='http://localhost:8080/';
  }

  /**
   * addPark
   */
  public addPark(){
    this.http.post(this.url+'park',{
    }).subscribe((response)=> {
      console.log(response);
    })
  }

  ngOnInit() {
  }

}
