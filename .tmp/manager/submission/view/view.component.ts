import { Component } from '@angular/core';
import { FormManagerService } from '../../form-manager.service';

@Component({
  template: "<formio [renderer]=\"service.config.renderer\" [src]=\"service.formio.submissionUrl\" [readOnly]=\"true\" (formLoad)=\"service.setForm($event)\" (submissionLoad)=\"service.submissionLoaded($event)\" ></formio> "
})
export class SubmissionViewComponent {
  constructor(public service: FormManagerService) { }
}
