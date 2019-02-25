import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';



declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  errormessage="";
  constructor(private router:Router, private user:UserService) {
    //let tt = this;
    var username;
   }
  
  ngOnInit() {
  
  }

  loginUser(e) {
 
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
 
   // this.user.getSessionCookie(username,password);
  
    

  let userId='';
     this.user.validateuser(username,password,userId,this.loginsuccess.bind(this),this.loginfail.bind(this));
      

  }
 
  loginsuccess(userId)
{
 

         
         this.router.navigate(['dashboard']); //editor
}
loginfail()
{
 
    this.errormessage="username or password is incorrect";
     
    $(".error").fadeIn("slow").delay(1000).fadeOut("slow");
  
}

}
