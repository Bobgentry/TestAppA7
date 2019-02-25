import { Component, OnInit } from '@angular/core';

import {RenderService} from "../render.service";


function renderHTML(formdata:string) {

 
  let html:string='<html>  <head>  ';
  html+='<link rel="stylesheet" type="text/css" href="./assets/css/render.css">';
   
  html+='</head>  <body><div class="html-form"><div class="rendered-form">';
  var jsonObj = $.parseJSON(formdata );



  jsonObj.forEach(element => {
   

                switch(element.type) { 
                  
                  case 'radio-group':{
                    html+='<div class="control-group"> ';
                    html+='<label class="fb-text-label">'+ element.label+'</label><br><br>';
             
                  //selected="true"'
                  
                    if(element.values)
                    {
                    let index=0;
                       for (var val of element.values) {
                        
                        let selectedsg='';
                       if (val.selected==true){
                         selectedsg='checked="checked"';
                         index++;
                       }
                       
                        html+='<input name="'+element.label+'" class=""  value="'+val.value+'" type="radio" '+selectedsg+'>'
                        html+=' <label for="'+val.label+'0">'+val.label+'</label><br>'
                     
                       
                      }
                     // html+='</select>';
                
                    }
                    html+='</div>';
                    break;
                  }

                  
                  case 'select': {  
                    html+='<div class="control-group"> ';
                    html+='<label class="fb-text-label">'+ element.label+'</label><br>';
                    html+='<div class="button-group"> ';
                    html+='  <select class="form-control" name="'+element.name+'" >'
                  //selected="true"'
                   
                    if(element.values)
                    {
                       for (var val of element.values) {
                       
                        html+='<option value="'+val.value+'" >'+val.label+'</option>'
                        //  html+='<option value="'+val.value+' >'+val.label+'</option>';
                      }
                      html+='</select>';
                
                    }
                    html+='</div>';
                    break;
                    
                  }

                  case 'number': {  
                    
                    html+='<div class="control-group"> ';
                    html+='<label class="fb-text-label">'+ element.label+'</label><br>';
                   html+='<input type="'+element.type+'" class="number-control"  name="'+element.name+'"  value="'+element.value+'" min="'+element.min+'" max="'+element.max+'" step="'+element.step+'" >';
                  html+='</div>'; 
                  break;
                  }
                  case 'hidden': {
                  html+='<div class="hidden-group"> ';
                  html+='</div>'; 
                  break;
                  }
                  case 'paragraph': {  
                   
                    html+='<div class="control-group"> ';
                    html+='<label class="fb-text-label">'+ element.label+'</label><br>';
                     html+='</div>'; 
                    
                    
                    break; 
                  }

                  case 'checkbox-group': {  
                    html+='<div class="control-group"> ';
                    html+='<label class="fb-text-label">'+ element.label+'</label><br>';
                    html+='<div class="button-group"> ';
                    
                    if(element.values)
                    {
                      for (var val of element.values) {
                        html+='<div class="checkbox">';
                        html+=' <label><input type="checkbox" value="">'+val.label+'</label>';
                        html+='</div>';          
                      }
                
                    }
                    html+='</div>';
                    html+='</div>';
                    break;
                    
                  }
                   
                   
                  case 'button':{               
                  html+='<button type="'+element.type+'" name="'+element.name+'"  class="btn-'+element.style+' btn" >'+element.label+'</button>';
                  break;
                  }
                  case 'date':{
                   
                    html+='<div class="control-group"> ';
                    html+='<label class="fb-text-label">'+ element.label+'</label><br>';
                  html+='<input type="'+element.type+'" class=" date-control" name="'+element.name+'" >';
                  html+='</div>'; 
                  break;
                }
                case 'textarea': {  
                  html+='<div class="control-group"> ';
                  html+='<label class="fb-text-label">'+ element.label+'</label><br>';
                  html+='<textarea class="form-control" title="'+element.description+'" maxlength="'+element.maxlength+'" rows="'+element.rows+'" type='+element.type+' name='+element.name+'></textarea> ';
                  html+='</div>'; 
                  
                  
                  break; 
                }
               
                  case 'text': {  
                    html+='<div class="control-group"> ';
                    html+='<label class="fb-text-label">'+ element.label+'</label><br>';
                    html+='<input class="form-control" title="'+element.description+'"  type='+element.type+' name='+element.name+'></input> ';
                    html+='</div>'; 
                    
                    break; 
                  } 
                  case 'header': { 
                  
                    html+='<div class=" control-head-group ">';                  
                    html+='<'+element.subtype+' class="header">'+element.label+'</'+element.subtype+'> ';
                    html+='</div>'; 
                    
                    break; 
                  } 
                }

                html+='</div></div></div>';           
    

          });
          // html+='<hr>'; 
  //   html=jsonObj[result][0].types;
  //  html='<div>'+html+ '</div>'+html;
  //  $('#htmlform').html(html);


     
    
      $('#htmlform').html(html);

  }
  


function initJq() {
 // alert('second');
setTimeout(function(){

}, 100);

  let fbEditor = $('.fb-editor');
  let formcontainer=$('#fb-rendered-form');

  (function ($) {
   
    (<any>$.fn).formBuilder = function (options) {
      if (!options) {
        
        console.log(options);
         options = {
        //   formRender:  function()
        //   {
        //     instance.actions.getData('json')
        // },
           onSave: function() {
            
            
             $('#fb-editor').toggle();
             $('#fb-rendered-form').toggle();
          
             renderHTML(instance.actions.getData('json'));
             

           
        

            
          
        //  Data:instance.actions.getData('json')
        //    });
             },
         getData: function(){
          
           console.log(FormData.toString);
          
       

        
         }
        
       };
      }
      

    
      let instance = {
        actions: {
          getData: null,
          setData: ({
            "type": "header",
            "subtype": "h1",
            "label": "Header"
            }),
            
          save:  null,
          showData: null,
          setLang: null,
          addField: null,
          removeField: null,
          clearFields: null
        },
        get formData() {
          return instance.actions.getData('json');
        },

        promise: new Promise(function (resolve, reject) {
        
        })

      };

      return instance;
    };
  })(jQuery);
}


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class editorComponent implements OnInit {
  formBuilder: any;
  constructor() { 
    var username;
    //alert('start');

  }
saveform () {
    let html=$('#htmlform').html();
  
   // this.renderservice.renderallHTML(html);
alert(html);

   }
   toggleform () {
   
 

    $('#fb-editor').toggle();
    $('#fb-rendered-form').toggle();
}
  ngOnInit() {
    //alert('first');
    initJq();
    this.formBuilder = (<any>jQuery('.build-wrap')).formBuilder();

  }
  renderHTML(formdata:string) {
    let html='<div>'+formdata+ '</div>';

    $('#fb-rendered-form').html(html);
      }

 

  title = 'app';

}
