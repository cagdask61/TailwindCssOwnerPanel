import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { SidebarMenuItemModel } from 'src/app/models/environments/sidebar-menu-item.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgIf, NgFor, RouterLink, RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export default class SidebarComponent {

  @ViewChild('sidebar') private readonly _sidebar: ElementRef<HTMLElement>;

  private _sidebarMenuItems: Array<SidebarMenuItemModel> = [
    { key: 'DASHBOARD', text: 'Dashboard', icon: 'bx bxs-dashboard', path: 'dashboard', visible: true },
    { key: 'PRODUCTS', text: 'Products', icon: 'bx bx-purchase-tag', path: 'products', visible: true },
    { key: 'CARDS', text: 'Cards', icon: 'bx bx-card', path: 'cards', visible: true },
    { key: 'BUTTONS', text: 'Buttons', icon: 'bx bx-joystick-button', path: 'buttons', visible: true },
    { key: 'TABLE', text: 'Table', icon: 'bx bx-table', path: 'table', visible: true },
    { key: 'FORM', text: 'Form', icon: 'bx bx-objects-horizontal-center', path: 'form', visible: true },
    { key: 'LISTBOX', text: 'ListBox', icon: 'bx bx-list-ul', path: 'listbox', visible: true },
    { key: 'AUTH', text: 'Auth', icon: 'bx bx-log-in', path: '/login', visible: true },
  ];
  
  get sidebarMenuItems(): Array<SidebarMenuItemModel> {
    return this._sidebarMenuItems;
  }

  private _active: boolean = false;
  get active(): boolean {
    return this._active;
  }


  close() {
    this._sidebar.nativeElement.classList.replace('left-0', '-left-96');
    this._active = false;
  }

  open() {
    this._sidebar.nativeElement.classList.replace('-left-96', 'left-0');
    this._active = true;
  }

  toggle() {
    if (this._active === true) {
      this._sidebar.nativeElement.classList.replace('left-0', '-left-96');
      this._active = false;
    }
    else if (this._active === false) {
      this._sidebar.nativeElement.classList.replace('-left-96', 'left-0');
      this._active = true;
    }
  }
}