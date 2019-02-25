import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.css']
})
export class ImageCaptureComponent implements OnInit {

  public fileChangeEvent(fileInput: any){
  
    if (fileInput.target.files && fileInput.target.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e : any) {
          $('#preview').attr('src', e.target.result);
      }

      reader.readAsDataURL(fileInput.target.files[0]);
  }
}
  constructor() { }

  ngOnInit() {
  }

}




