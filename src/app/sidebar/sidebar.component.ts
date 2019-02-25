import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import * as $ from "jquery";
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

  
})
export class SidebarComponent implements OnInit {
 	
  name = 'anony';

  constructor(private router:Router,private user: UserService) { }

  

  ngOnInit() {
      $('.menulist ul').hide();

  $('.itemlist').click(function() {
      $(this).find('ul').slideToggle();
  });
  }

  RemoveSidebar()
  {
  
    $('#sidebar').toggleClass('active'); 
    $('#sidebar').width("0px");
   
 
  }
  showMainPanel()
  {
  
    this.router.navigate(['dashboard','MainPage']);
    this.RemoveSidebar();
  }

  SecondPanel()
  {
  
    this.router.navigate(['dashboard','Page2']);
    this.RemoveSidebar();
  }

  ThirdPanel()
  {
  
    this.router.navigate(['dashboard','Page3']);
    this.RemoveSidebar();
  }
  anotherPanel()
  {
    this.router.navigate(['dashboard','another']);
    this.RemoveSidebar();
  }

  editorpanel()
  {
    this.router.navigate(['dashboard','editor']);
    this.RemoveSidebar();
  }

}
