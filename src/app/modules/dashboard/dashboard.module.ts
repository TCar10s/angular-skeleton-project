import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutDashboardComponent } from './layout/layout-dashboard.component';
import { SidebarComponent } from '@core/components/sidebar/sidebar.component';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { TopbarComponent } from '@core/components/topbar/topbar.component';

@NgModule({
  declarations: [LayoutDashboardComponent, SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    TieredMenuModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    TooltipModule,
    SidebarModule,
  ],
})
export class DashboardModule {}
