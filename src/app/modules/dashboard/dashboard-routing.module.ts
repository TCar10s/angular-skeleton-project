import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDashboardComponent } from './layout/layout-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./pages/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('./pages/stats/stats.module').then((m) => m.StatsModule),
      },
      {
        path: 'team',
        loadChildren: () =>
          import('./pages/team/team.module').then((m) => m.TeamModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
