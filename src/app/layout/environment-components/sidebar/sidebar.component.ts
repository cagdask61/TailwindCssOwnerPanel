import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SidebarMenuItemModel } from 'src/app/models/environments/sidebar-menu-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    RouterLink, RouterLinkActive
  ],
})
export default class SidebarComponent {

  @ViewChild('sidebar') private readonly _sidebar: ElementRef<HTMLElement>;

  readonly sidebarVisibilityStatus = signal(false);

  private _sidebarMenuItems: ReadonlyArray<SidebarMenuItemModel> = [
    { key: 'DASHBOARD', text: 'Dashboard', path: 'dashboard', visible: true },
    { key: 'CARDS', text: 'Cards', path: 'cards', visible: true },
    { key: 'BUTTONS', text: 'Buttons', path: 'buttons', visible: true },
    { key: 'TABLE', text: 'Table', path: 'table', visible: true },
    { key: 'FORM', text: 'Form', path: 'form', visible: true },
    { key: 'LISTBOX', text: 'ListBox', path: 'listbox', visible: true },
    { key: 'AUTH', text: 'Auth', path: '/login', visible: true },
  ];

  get sidebarMenuItems(): ReadonlyArray<SidebarMenuItemModel> {
    return this._sidebarMenuItems;
  }

  close() {
    this.sidebarVisibilityStatus.set(false);
  }

  open() {
    this.sidebarVisibilityStatus.set(true);
  }

  toggle() {
    this.sidebarVisibilityStatus.update(v => !v);
  }
}