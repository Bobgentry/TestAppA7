import { Component, ViewChild } from '@angular/core';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
//import { MainPanelComponent } from '../mainPanel/mainPanel.Component';
import {SignatureService} from '../signature.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsiveModule } from 'ng2-responsive'
import { OnInit } from '@angular/core';
import { fadeInAnimation } from '../_animations/index';
@Component({
  selector: 'app-signature-panel',
  templateUrl: './signature-panel.component.html',
  styleUrls: ['./signature-panel.component.css'],
  animations: [fadeInAnimation]
  ,  host: { '[@fadeInAnimation]': '' }
})


export class SignaturePanelComponent implements OnInit{
 
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  pagename:string='';
portrait:string;
  height:50;
  width:800;
  public signatureIamage: string;
  
  ngOnInit() {
  
   // this.CanvasResize();
    console.log("in init");
  }

  

  ngAfterViewInit() {
    console.log('beforeafterinit');
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
   console.log(this.getOrientation());
   this.CanvasResize();
   console.log('After afterinit');
   
  }
 

  public signaturePadOptions: Object = { 
   //  cWidth=document.getElementById("row").offsetWidth;
    // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': this.width,
    'canvasHeight': this.height,
    'penColor': 'rgb(0, 0, 200)'
    
   
    
  };
 
  constructor(private router:Router,private route:ActivatedRoute,public signature: SignatureService ) {
    
    route.paramMap.subscribe(
      params => this.pagename = params.get('page')
      );
  }

  //   responsiveEvent($event)
  // {
    
  //   console.log("responsive event",this.getOrientation());
   
  // }

 CanvasResize() {

  let width= document.getElementById("row").offsetWidth-10;
  let height= document.getElementById("row").offsetHeight-10;
    let canvas=document.querySelector('canvas');
    this.signaturePad.set('canvasWidth',width);
    this.signaturePad.set('canvasHeight',height);
 }
 
  onResize(event) {
   // this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
   console.log("In resize event");
   this.CanvasResize();
    
    console.log(this.getOrientation());
    console.log("after resize event");
  }
  
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.signatureIamage= this.signaturePad.toDataURL();
    this.signature.setSignature(this.signatureIamage);
  
    this.router.navigate(['dashboard','MainPage']);
    
  }

  Cancel() {
    // will be notified of szimek/signature_pad's onEnd event
   // console.log(this.signaturePad.toDataURL());
   // this.signatureIamage= this.signaturePad.toDataURL();
   // this.signature.setSignature(this.signatureIamage);
  
    this.router.navigate(['dashboard','MainPage']);
    
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  drawClear() {
    this.signaturePad.clear();
  }
  
  getOrientation() {
    console.log('width',$(window).width());
    console.log('height',$(window).height())
    if ($(window).width() > $(window).height()) {
      
      console.log('hide');
    $('#port').addClass('dontshow').removeClass('doshow');

    console.log('dont show');
      return 'landscape';
      
    }
    $('#port').addClass('doshow').removeClass('dontshow');
  console.log('show');
    return 'portrait';
  }

}

