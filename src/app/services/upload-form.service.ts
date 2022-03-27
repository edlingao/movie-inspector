import { Injectable } from '@angular/core';
import { FORM_HTTP_CONFIG } from '../config/app.config';
import { Submit } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class UploadFormService {
  // Configurable endpoint
  endpoint: string = FORM_HTTP_CONFIG.apiEndpoint;
  
  constructor() { }
  // Upload endpoint
  async uploadForm(formObj: Submit) {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)
      })
      return await response.json()
    } catch(err) {
      return err;
    }
  }
}
