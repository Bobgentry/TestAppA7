import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
  animations: [fadeInAnimation]
})

export class FirstpageComponent implements OnInit {



  ngOnInit() {
  }

}


