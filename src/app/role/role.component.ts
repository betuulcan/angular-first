import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  callCenter: string="";

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.callCenter=this.testService.callCenter;
  }

}
