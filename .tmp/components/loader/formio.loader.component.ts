import {Component, Input} from '@angular/core';

@Component({
  selector: 'formio-loader',
  styles: [".formio-loader-wrapper { position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 1000; } .formio-loader { position: absolute; left: 50%; top: 50%; margin-left: -30px; margin-top: -30px; z-index: 10000; display: inline-block; border: 6px solid #f3f3f3; border-top: 6px solid #3498db; border-radius: 50%; width: 60px; height: 60px; animation: spin 2s linear infinite; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } "],
  template: "<div class=\"formio-loader-wrapper\" *ngIf=\"isLoading\"> <div class=\"formio-loader\"></div> </div> "
})
export class FormioLoaderComponent {
  @Input() isLoading: boolean;
}
