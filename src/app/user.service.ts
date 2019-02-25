import { Injectable, EventEmitter } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';

 const PouchDB = require('pouchdb').default;



@Injectable()
export class UserService {
  public people: Array<any>;
  public form: any;
  public currentuser:string;

  private isInstantiated: boolean;
  private database: any;
  private userdatabase: any;
  private listener: EventEmitter<any> = new EventEmitter();

  constructor( private http: HttpClient) {
    if(!this.isInstantiated) {
      this.database = new PouchDB("data");
      this.userdatabase = new PouchDB("users");
      this.isInstantiated = true;
     }
  }
  
  
  public fetchuser(id: string) {
     return this.userdatabase.get(id);
}



public createuser(id: string,username:string,password:string) {
  let user = {  _id: id,username: username,password:password };
  return this.userdatabase.put(user);
}

  public isUserLoggedIn;
  public userId='';
 
 
  /************************************** 
   rest service fetching session session cookie
  ************************************** */
 getSessionCookie(username,password)
 {
   
  const params = new HttpParams()
  .set('grant_type', 'password')
  .set('scope', 'read')
  .set('Username', username)
  .set('Password', password);

  const headers = new HttpHeaders().set('Authorization', 'Basic s89s89s89asd');

    const httpOptions = {
      headers: headers,
      params: params,
      responseType: 'text',
     //  withCredentials: true
    };
    
  return  this.http.post('http://TGHDEV-web01/Seetec.Storefront/api/Security/Login',
 
   
     { httpOptions}).subscribe(  data => {
            alert('ok');
          },
          cookie => {
            console.log('cookie');
            
          }
          
        )

 }



fetchcookie(cookieName)
  {
return  Cookie.get(cookieName);

  }


  getUserLoggedIn() {
    
      return  this.currentuser;
    }

   validateuser(username,password,userId,loginsuccess,loginfail) {

   
     this.currentuser=username;
 
       this.fetchuser(username.toLowerCase( )).then(result => {
  
         if ((result.username.toLowerCase( )==username.toLowerCase( )) && (result.password==password))
         { 
              loginsuccess(username);
         }
         else{
          
          
            loginfail();
         }
        },
    
         error => {  
        
          if( username.toLowerCase( )=='admin')
          {
            this.createuser('admin','admin','admin');
          }
           loginfail();
         });
               
 
  }

   
 



}

