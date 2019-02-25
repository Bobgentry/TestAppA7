import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


import * as $ from "jquery";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
 	 name = '';
  pagename:string='';
  subscription:Subscription;
  constructor(public user: UserService,private route: ActivatedRoute,

    
    private router: Router) { 
      this.
      route.paramMap.subscribe(
        params => this.pagename = params.get('page')
        );

        
    }

    public getRouterOutletState(outlet) {
    
      return outlet.isActivated ? outlet.activatedRoute : '';
    }

  userName:string;
  value:string;

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe((params: Router) => {
     this.pagename = this.route.snapshot.params['page'];
  
     // console.log('page',this.pagename);
    });
   
    
   //console.log('param', this.userName = this.route.snapshot.queryParams['sig']);
 
 
  }
  

 
 
}

