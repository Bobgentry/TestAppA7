import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import * as $ from "jquery";
import {SignatureService} from '../signature.service';
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import { SignaturePanelComponent } from '../signature-panel/signature-panel.component';
import { fadeInAnimation } from '../_animations/index';

@Component({
  selector: 'app-get-signature',
  templateUrl: './get-signature.component.html',
  styleUrls: ['./get-signature.component.css'],
  animations: [fadeInAnimation]
})
export class GetSignatureComponent implements OnInit {

  public signatureImage:string;
  animationState='enter';
  
  constructor(private router:Router,private signature:SignatureService) { }

  ngOnInit() {

    this.signatureImage=this.signature.getSignature();
    console.log('sig',this.signatureImage);
  }

  showSignature()
  {
  
    this.router.navigate(['signaturePanel','mainPanel']);
  }

}

