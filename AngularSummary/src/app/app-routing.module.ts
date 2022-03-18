import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { MainContainerComponent } from './home/main-container/main-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: MainContainerComponent,
    children: [
      { path: '', redirectTo: 'base', pathMatch: 'full' },
      {
        path: 'base',
        loadChildren: () => import('./components/views/views.module').then(m => m.ViewsModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./components/zh-common/zh-common.module').then(m => m.ZhCommonModule)
      },
      {
        path: 'css',
        loadChildren: () => import('./components/zh-css/zh-css.module').then(m => m.ZhCssModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule)
      },

    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }//通配符
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    // @ts-ignore __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    useValue: window.__MICRO_APP_BASE_ROUTE__ || '/',
  }]
})
export class AppRoutingModule { }
