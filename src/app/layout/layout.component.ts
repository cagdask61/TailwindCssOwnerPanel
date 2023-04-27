import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import NavbarComponent from './environment-components/navbar/navbar.component';
import SidebarComponent from './environment-components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    RouterOutlet, NavbarComponent, SidebarComponent
  ],
})
export default class LayoutComponent {

  @ViewChild(SidebarComponent) private readonly _sidebarComponent: SidebarComponent;

  menuBtnClicked() {
    this._sidebarComponent.toggle();
  }
}