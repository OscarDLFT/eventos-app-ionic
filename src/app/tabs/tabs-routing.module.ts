import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/tab1/tab1.module').then(m => m.Tab1Module)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/events/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pages/tab3/tab3.module').then(m => m.Tab3Module)
      },
      {
        path: '',
        redirectTo: '/tabs/tab2',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
