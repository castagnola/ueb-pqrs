import { Component, Input, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from '../app.component';


@Component({
    selector: 'app-menu-radicado',
    templateUrl: './app-menu-radicado.component.html',
    styleUrls: ['./app-menu-radicado.component.css']
})
export class AppMenuRadicadoComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) { }

    ngOnInit() {
        this.model = [
            { label: 'Gestión Radicados', icon: 'fa fa-cog', routerLink: ['dashboard-radicado'] },
            { label: 'Reportes', icon: 'fa fa-file-text', routerLink: ['generar-reporte'] },
            

        ]
    }
    /**
      * 
      * @param theme cambio color yhema
      */
    changeTheme(theme) {
        this.app.theme = theme;
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');

        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';

    }

}

@Component({
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
      <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
          <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
              <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" *ngIf="!child.routerLink"
                 [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target"
                  (mouseenter)="hover=true" (mouseleave)="hover=false">
                  <i [ngClass]="child.icon"></i>
                  <span>{{child.label}}</span>
                  <i class="fa fa-fw fa-angle-down ui-menuitem-toggler" *ngIf="child.items"></i>
                  <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
              </a>

              <a (click)="itemClick($event,child,i)" *ngIf="child.routerLink"
                  [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                 [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target"
                  (mouseenter)="hover=true" (mouseleave)="hover=false">
                  <i [ngClass]="child.icon"></i>
                  <span>{{child.label}}</span>
                  <i class="fa fa-fw fa-angle-down ui-menuitem-toggler" *ngIf="child.items"></i>
                  <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
              </a>
              <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ?
              'visible' : 'hidden'" [visible]="isActive(i)" [parentActive]="isActive(i)"></ul>
          </li>
      </ng-template>
  `,
    animations: [
        trigger('children', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    activeIndex: number;

    hover: boolean;

    _parentActive: boolean;

    constructor(public app: AppComponent, public router: Router, public location: Location) { }

    itemClick(event: Event, item: MenuItem, index: number) {
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }

        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }

        // hide menu
        if (!item.items && (this.app.overlay || !this.app.isDesktop())) {
            this.app.sidebarActive = false;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }

    unsubscribe(item: any) {
        if (item.eventEmitter) {
            item.eventEmitter.unsubscribe();
        }

        if (item.items) {
            for (const childItem of item.items) {
                this.unsubscribe(childItem);
            }
        }
    }

    @Input() get parentActive(): boolean {
        return this._parentActive;
    }

    set parentActive(val: boolean) {
        this._parentActive = val;

        if (!this._parentActive) {
            this.activeIndex = null;
        }
    }
}

