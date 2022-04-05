import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // 👇 设置基础路由
  providers: [{
    provide: APP_BASE_HREF,
    // @ts-ignore __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    useValue: window.__MICRO_APP_BASE_ROUTE__ || '/',
  }]
})
export class AppRoutingModule { }
