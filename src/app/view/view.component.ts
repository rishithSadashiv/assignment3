import { Component, OnInit } from '@angular/core';
import {Employee} from './employee'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
list:Employee[]

  constructor() {
    this.list=[
      {eid:1,ename:'name1',edesig:'job1',ejdate:new Date(2020,10,10),esalary:150000},
      {eid:1,ename:'name2',edesig:'job2',ejdate:new Date(2020,10,20),esalary:151000}
    ]
   }

  ngOnInit(): void {
  }

}
