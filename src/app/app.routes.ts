import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/containers';
import { RadicadoComponent } from './radicado/containers';


export const routes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path: 'app', loadChildren: './app-wrapper/app-wrapper.module#AppWrapperModule'},
    {path:'login', component: LoginComponent},
    {path: 'login/radicado', component: RadicadoComponent }


 
];
export const AppRoutes = RouterModule.forRoot(routes);

//export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
