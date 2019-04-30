import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/containers';
import { RadicadoComponent } from './radicado/containers';
import { BeforeLoginService } from './login/service/before-login/before-login.service';
import { AfterLoginService } from './login/service/after-login/after-login.service';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full',canActivate:[BeforeLoginService]},
    {path: 'app', loadChildren: './app-wrapper/app-wrapper.module#AppWrapperModule',canActivate:[AfterLoginService]},
    {path:'login', component: LoginComponent,canActivate:[BeforeLoginService]},
    {path: 'login/radicado', component: RadicadoComponent },
    // {path: 'app/forms', component: RadicadoComponent }



 
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});

//export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
