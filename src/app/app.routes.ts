import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login';
import { AppWrapperComponent } from './app-wrapper/containers';
import { AppWrapperModule } from './app-wrapper/app-wrapper.module';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'app', loadChildren: './app-wrapper/app-wrapper.module#AppWrapperModule'}
 
];
export const AppRoutes = RouterModule.forRoot(routes);

//export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
