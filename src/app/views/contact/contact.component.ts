import { Component, OnInit } from '@angular/core';
import { UploadFormService } from 'src/app/services/upload-form.service';
import { Submit } from 'src/app/types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private uploadFormService: UploadFormService
  ) { }

  ngOnInit(): void {
  }
  
  onValid(valid: Boolean) {
    // Console log to watch the valid event fire
    console.log(valid)
  }

  onSubmit(submitObj: Submit) {
    this.uploadFormService.uploadForm(submitObj)
  }

}
