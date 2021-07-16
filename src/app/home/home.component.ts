import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //string,number,boolean,array,any
  //any her tipi kabul ediyor.
  yas: any;
  isim= "Betül";
  constructor() { }

  ngOnInit(): void {
    //metodların içinde değişken tanımlarken tip isteniyor.
     var soyisim="Can";
     this.yas=78;
  }

}
