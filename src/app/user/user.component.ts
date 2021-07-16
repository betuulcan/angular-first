import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  callCenter: string="";
  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.callCenter=this.testService.callCenter;
  }

}
