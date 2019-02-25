import { Injectable } from '@angular/core';

@Injectable()
export class SignatureService {
  public signatureStr='';
  constructor() { }


  setSignature(signature)
  {
    this.signatureStr=signature;
  }

  getSignature()
  {
    return this.signatureStr;
  }


}

