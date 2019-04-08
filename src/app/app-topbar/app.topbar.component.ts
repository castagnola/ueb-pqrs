import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppWrapperComponent } from "../app-wrapper/containers/app-wrapper/app-wrapper.component";
import { AuthService } from '../login/service/auth/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../login/service/token/token.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    /**
     * Valriables
     */
    public loggedIn: boolean;
   

    constructor(public app: AppWrapperComponent, private auth: AuthService, private router: Router, private token: TokenService) { }

    ngOnInit() {
        this.auth.authStatus.subscribe(response => this.loggedIn = response);

    }

    /**
     * 
     * @param event pass to logout
     */

    logout(event: MouseEvent) {

        event.preventDefault();
        this.token.remove();
        this.auth.changeAuthStatus(false),
            this.router.navigateByUrl('/login')
    }
}
