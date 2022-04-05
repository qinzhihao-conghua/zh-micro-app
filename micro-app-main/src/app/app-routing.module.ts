import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page/my-page.component';

const routes: Routes = [
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: 'child',
    children: [{
      path: '**',
      component: MyPageComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // 设置主应用基础路由为main-angular11(用于后续部署)，则子应用基础路由(baseroute)为/main-angular11/xxx
  providers: [{ provide: APP_BASE_HREF, useValue: '/main' }]
})
export class AppRoutingModule { }
