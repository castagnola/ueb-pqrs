/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-topbar/app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppSideBarComponent } from './app-sidebar/app.sidebar.component';
import { AppSideBarTabContentComponent } from './app-sidebar/app.sidebartabcontent.component';
import { AppMenuComponent, AppSubMenuComponent } from './app.menu.component';
import { ScrollPanelModule} from 'primeng/primeng';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule, ScrollPanelModule ],
        declarations: [ AppComponent,
                AppTopBarComponent,
                AppMenuComponent,
                AppSubMenuComponent,
                AppFooterComponent,
                AppSideBarComponent,
                AppSideBarTabContentComponent
            ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
