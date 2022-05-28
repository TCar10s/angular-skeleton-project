import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public items: MenuItem[];

  @ViewChild('sidebar') sidebar!: ElementRef<HTMLDivElement | undefined>;
  @ViewChild('mask') mask!: ElementRef<HTMLDivElement | undefined>;

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: '',
        items: [
          {
            label: 'Inicio',
            icon: 'pi pi-home',
            routerLink: '/dashboard',
            command: () => this.toggleMenu(),
          },
          {
            label: 'Users',
            icon: 'pi pi-images',
            routerLink: 'users',
            command: () => this.toggleMenu(),
          },
          {
            separator: true,
          },
          {
            label: 'Cerrar sesión',
            icon: 'pi pi-power-off',
          },
        ],
      },
    ];
  }

  public toggleMenu(): void {
    this.sidebar.nativeElement?.classList.toggle('active');
    this.mask.nativeElement?.classList.toggle('layout-mask-active');
  }

  outsideClick() {
    this.sidebar.nativeElement?.classList.remove('active');
    this.mask.nativeElement?.classList.remove('layout-mask-active');
  }
}
