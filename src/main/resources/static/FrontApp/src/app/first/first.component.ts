import { Component, OnInit } from '@angular/core';
import {FirstService} from "../../services/First.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

 info = {
   nom: 'mohamed',
   email: 'med@youssfi.net',
   tel: '61326837'
 }
comments = [
  {
    date: new Date(),
    message: 'a'
  },

  {
    date: new Date(),
    message: 'b'
  },

  {
    date: new Date(),
    message: 'c'
  }
];



  constructor() {
  }


  ngOnInit() {
  }

}
