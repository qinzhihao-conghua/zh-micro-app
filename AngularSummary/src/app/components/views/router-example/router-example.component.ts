import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'zh-router-example',
  templateUrl: './router-example.component.html',
  styleUrls: ['./router-example.component.scss']
})
export class RouterExample {
  constructor(private router: Router) { }
  id: string;
  name: string = "张三";
  // 跳转导航的另一种方式
  navigateTO() {
    this.router.navigate(["router/example/router-child3", { id: "xxxx", name: this.name }]);
    // this.router.navigate([{outlets:{auxiliary:'router-child4'}}]);
  }
  // 展示辅助路由
  auxiliaryRouter() {

  }
}
