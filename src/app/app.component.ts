import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'angular-first';
  todos=[
    "Yapılacak iş 1",
    "Yapılacak iş 2",
    "Yapılacak iş 3",
    "Yapılacak iş 4",
    "Yapılacak iş 5",
    ];

  constructor(private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) {}
  ngOnInit() {
    //toast mesaj
    this.showSuccess();  
    //loading ekranı
    this.showSpinner();
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showSpinner(){
    
      /** spinner starts on init */
      this.spinner.show();
  
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 2000);
    
  }

}
