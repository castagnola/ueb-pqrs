import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule, AutoCompleteModule, BreadcrumbModule, CalendarModule, CarouselModule, CheckboxModule, CodeHighlighterModule, ConfirmDialogModule, ColorPickerModule, ContextMenuModule, DropdownModule, FieldsetModule, FileUploadModule, GalleriaModule, InplaceModule, InputMaskModule, InputSwitchModule, InputTextModule, InputTextareaModule, LightboxModule, ListboxModule, MegaMenuModule, MenubarModule, MessageModule, MessagesModule, MultiSelectModule, OrderListModule, OrganizationChartModule, OverlayPanelModule, PaginatorModule, PanelMenuModule, PasswordModule, PickListModule, ProgressBarModule, RadioButtonModule, ScrollPanelModule, SelectButtonModule, SlideMenuModule, SpinnerModule, SplitButtonModule, TabMenuModule, TabViewModule, TerminalModule, TieredMenuModule, ToggleButtonModule, ToolbarModule, TooltipModule, TreeTableModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ChipsModule } from 'primeng/chips';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { GrowlModule } from 'primeng/growl';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppComponent } from '../app.component';
import { AppMenuComponent, AppSubMenuComponent } from '../app.menu.component';
import { AppSideBarComponent } from '../app-sidebar/app.sidebar.component';
import { AppSideBarTabContentComponent } from '../app-sidebar/app.sidebartabcontent.component';
import { AppTopBarComponent } from '../app-topbar/app.topbar.component';
import { DashboardDemoComponent } from '../demo/view/dashboarddemo.component';
import { SampleDemoComponent } from '../demo/view/sampledemo.component';
import { FormsDemoComponent } from '../demo/view/formsdemo.component';
import { DataDemoComponent } from '../demo/view/datademo.component';
import { PanelsDemoComponent } from '../demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from '../demo/view/overlaysdemo.component';
import { MenusDemoComponent } from '../demo/view/menusdemo.component';
import { MessagesDemoComponent } from '../demo/view/messagesdemo.component';
import { MiscDemoComponent } from '../demo/view/miscdemo.component';
import { ChartsDemoComponent } from '../demo/view/chartsdemo.component';
import { EmptyDemoComponent } from '../demo/view/emptydemo.component';
import { FileDemoComponent } from '../demo/view/filedemo.component';
import { UtilsDemoComponent } from '../demo/view/utilsdemo.component';
import { LoginComponent } from '../login/containers';
import { CarService } from '../demo/service/carservice';
import { CountryService } from '../demo/service/countryservice';
import { EventService } from '../demo/service/eventservice';
import { NodeService } from '../demo/service/nodeservice';
import { LoginService } from '../login/service';
import { AppWrapperRoutes } from './app-wrapper.routing';
import { AppWrapperComponent } from './containers/app-wrapper/app-wrapper.component';
import { DocumentationComponent } from '../demo/view/documentation.component';
import { AppFooterComponent } from '../app.footer.component';
import { AppMenuRadicadoComponent } from '../app-menu-radicado/app-menu-radicado.component';
import { DashboardRadicadoComponent } from '../dashboard-radicado/containers/dashboard-radicado/dashboard-radicado.component';
import { ListaRadicadoComponent } from '../dashboard-radicado/components/lista-radicado/lista-radicado.component';
import { ListaRadicadoDosComponent } from '../dashboard-radicado/components/lista-radicado-dos/lista-radicado-dos.component';



@NgModule({
    imports: [
      CommonModule,    
      ReactiveFormsModule,
      FormsModule,
      AppWrapperRoutes,
      HttpClientModule,
      AccordionModule,
      AutoCompleteModule,
      BreadcrumbModule,
      ButtonModule,
      CalendarModule,
      CardModule,
      CarouselModule,
      ChartModule,
      CheckboxModule,
      ChipsModule,
      CodeHighlighterModule,
      ConfirmDialogModule,
      ColorPickerModule,
      ContextMenuModule,
      DataViewModule,
      DialogModule,
      DropdownModule,
      EditorModule,
      FieldsetModule,
      FileUploadModule,
      FullCalendarModule,
      GalleriaModule,
      GrowlModule,
      InplaceModule,
      InputMaskModule,
      InputSwitchModule,
      InputTextModule,
      InputTextareaModule,
      LightboxModule,
      ListboxModule,
      MegaMenuModule,
      MenuModule,
      MenubarModule,
      MessageModule,
      MessagesModule,
      MultiSelectModule,
      OrderListModule,
      OrganizationChartModule,
      OverlayPanelModule,
      PaginatorModule,
      PanelModule,
      PanelMenuModule,
      PasswordModule,
      PickListModule,
      ProgressBarModule,
      RadioButtonModule,
      RatingModule,
      ScrollPanelModule,
      SelectButtonModule,
      SlideMenuModule,
      SliderModule,
      SpinnerModule,
      SplitButtonModule,
      StepsModule,
      TableModule,
      TabMenuModule,
      TabViewModule,
      TerminalModule,
      TieredMenuModule,
      ToastModule,
      ToggleButtonModule,
      ToolbarModule,
      TooltipModule,
      TreeModule,
      TreeTableModule,
      VirtualScrollerModule,
      
      
  ],
  declarations: [
      AppMenuComponent,
      AppSubMenuComponent,
      AppSideBarComponent,
      AppSideBarTabContentComponent,
      AppTopBarComponent,
      AppFooterComponent,
      DashboardDemoComponent,
      SampleDemoComponent,
      FormsDemoComponent,
      DataDemoComponent,
      PanelsDemoComponent,
      OverlaysDemoComponent,
      MenusDemoComponent,
      MessagesDemoComponent,
      MessagesDemoComponent,
      MiscDemoComponent,
      ChartsDemoComponent,
      EmptyDemoComponent,
      FileDemoComponent,
      UtilsDemoComponent,
      DocumentationComponent,
      AppWrapperComponent,
      AppMenuRadicadoComponent,
      DashboardRadicadoComponent,
      ListaRadicadoComponent,
      ListaRadicadoDosComponent


  ],


exports: [
    AppMenuComponent,
    AppSubMenuComponent,
    AppSideBarComponent,
    AppSideBarTabContentComponent,
    AppTopBarComponent,
    AppFooterComponent,
    DashboardDemoComponent,
    SampleDemoComponent,
    FormsDemoComponent,
    DataDemoComponent,
    PanelsDemoComponent,
    OverlaysDemoComponent,
    MenusDemoComponent,
    MessagesDemoComponent,
    MessagesDemoComponent,
    MiscDemoComponent,
    ChartsDemoComponent,
    EmptyDemoComponent,
    FileDemoComponent,
    UtilsDemoComponent,
    DocumentationComponent,
    AppWrapperComponent
    
],
providers: [
    CarService,
    EventService,
    CountryService,
    NodeService,
    
]


})
export class AppWrapperModule { }
