import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '@core/components/sidebar/sidebar.component';

@Component({
  templateUrl: './layout-dashboard.component.html',
  styleUrls: ['./layout-dashboard.component.scss'],
})
export class LayoutDashboardComponent implements OnInit {

  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  constructor() {}

  ngOnInit(): void {}

  public eventToggle(): void {
    this.sidebar.toggleMenu();
  }
}
