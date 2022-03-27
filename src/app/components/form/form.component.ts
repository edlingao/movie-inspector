import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldsService } from 'src/app/services/form-fields.service';
import { Submit } from 'src/app/types';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() maxChars: number = 5
  @Output() onValidEvent = new EventEmitter<Boolean>();
  @Output() onSubmitEvent = new EventEmitter<Submit>();

  myForm: FormGroup = new FormGroup({});
  fields: Array<any> = [];

  constructor(
    private formBuilder: FormBuilder,
    private formFields:FormFieldsService
  ) { 
    this.fields = formFields.getFields()
  }

  ngOnInit(): void {
    const commonValidators = [Validators.required];
    const nameRegx = new RegExp(/^[a-zA-Z0-9\s]*$/im);
    const numberValidator = new RegExp(/^\+([0-9])+/im);
    this.myForm = this.formBuilder.group({
      name: ['', [...commonValidators, Validators.pattern(nameRegx)]],
      email: ['', [...commonValidators, Validators.email]],
      phone: ['', [...commonValidators, Validators.pattern(numberValidator)]],
      message: ['', [...commonValidators, Validators.maxLength(this.maxChars)]],
    });
  }

  onSubmit(form: FormGroup): void {
    if(form.valid) {
      this.onSubmitEvent.emit(form.value)
    }
  }

  capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  eval(textWithVariables: string): string {
    //Hacky but scalable :D/
    return eval(`let maxChars = ${this.maxChars};${textWithVariables}`);
  }

  onValid(valid: Boolean) {
    if(valid) {
      this.onValidEvent.emit(valid)
    }
  }

  isFieldValid(name: string): Boolean {
    return Boolean(this.myForm.get(name)?.invalid && ( 
      this.myForm.get(name)?.dirty 
      || this.myForm.get(name)?.touched
    ))
  }

}
