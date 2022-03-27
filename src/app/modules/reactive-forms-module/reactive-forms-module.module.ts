import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../../components/form/form.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UploadFormService } from '../../services/upload-form.service';

@NgModule({
  declarations: [ FormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [ FormComponent ],
  providers: [ UploadFormService ]
})
export class ReactiveFormsModuleModule { }
