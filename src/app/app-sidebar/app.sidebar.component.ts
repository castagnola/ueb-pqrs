import {Component, Inject, forwardRef} from '@angular/core';
import { AppWrapperComponent } from "../app-wrapper/containers/app-wrapper/app-wrapper.component";



@Component({
    selector: 'app-sidebar',
      templateUrl: 'app.sidebar.component.html'
})
export class AppSideBarComponent {

    constructor(public app: AppWrapperComponent) {}

}
