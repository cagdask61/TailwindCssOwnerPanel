import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    RouterLink, NgIf
  ]
})
export default class NavbarComponent {

  private _visible: boolean = false;


  @Output('menuButtonClicked') _menuButtonClickEvent = new EventEmitter<any>();


  public get visible(): boolean {
    return this._visible;
  }


  toggleDropdown() {
    this._visible = !this._visible;
  }

  openSidebar(event: any) {
    this._menuButtonClickEvent.emit(event);
  }

}