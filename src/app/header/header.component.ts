import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {

  
  }


  toggleSidebar(){
  
  let currentwidth=$('#sidebar').width();
if (currentwidth==0)
{
  $('#sidebar').width("240px");
}
else{
  $('#sidebar').width("0");
}
    //console.log('uname= ',this.user.getUserLoggedIn());

   // $('#sidebar').toggleClass('active');
    
   // $('#sidebarCollapse').find('i').toggleClass('glyphicon-chevron-left').toggleClass('glyphicon-align-justify');
  
   
  }

 
}
