import { Injectable } from '@angular/core';
import { FormField } from 'src/app/types';


@Injectable({
  providedIn: 'root'
})

export class FormFieldsService {
  fields: Array<FormField> = [
    {
      name: 'name',
      placeholder: 'Your name',
      error: '"Enter a valid name (No special characters: */.,/_)(*&^))"'
    },
    {
      name: 'email',
      placeholder: 'Your email',
      error: '"Enter a valid email"',
    },
    {
      name: 'phone',
      placeholder: 'Your phone',
      error: '"Enter a valid phone. (Note: your phone number should start with a +)"'
    },
    {
      name: 'message',
      placeholder: 'Your message',
      error: '`Your message cannot be more than ${maxChars} characters long`'
    },
  ];

  constructor() { }

  getFields() {
    return this.fields
  }
}
