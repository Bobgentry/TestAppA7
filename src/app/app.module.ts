import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RenderService } from './render.service';
import { UserService } from './user.service';
import { editorComponent } from './editor/editor.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImageCaptureComponent } from './image-capture/image-capture.component';
import {SignatureService} from './signature.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignaturePanelComponent } from './signature-panel/signature-panel.component';

import { SignaturePadModule } from 'angular2-signaturepad';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GetSignatureComponent } from './get-signature/get-signature.component';
//import { AuthguardGuard } from './authguard.guard';




const appRoutes:Routes = [
  {  path: 'dashboard',
//  canActivate: [AuthguardGuard],
   component: DashboardComponent
 },
 {
   path: 'dashboard/:page',
 
   component: DashboardComponent
 },
 {
   path: 'signaturePanel/:page',
 //  canActivate: [AuthguardGuard],
   component: SignaturePanelComponent
 },

  {
         path: '',
  
   
   component: LoginFormComponent,
 },

  { path: '**', component: DashboardComponent }
 ]; 


@NgModule({
  declarations: [
    AppComponent,
   // MainPanelComponent,
    editorComponent,
    LoginFormComponent,
    DashboardComponent,
    FirstpageComponent,
    FooterComponent,
    HeaderComponent,
    ImageCaptureComponent,
     NotfoundComponent,
    SidebarComponent,
    SignaturePanelComponent,
    ImageCaptureComponent,
    GetSignatureComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SignaturePadModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [RenderService,
    UserService,
    SignatureService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent,
    
  ]
})
export class AppModule { }
