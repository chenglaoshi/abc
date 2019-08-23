import { Component } from '@angular/core';

//装饰器Component，声明下面的class是一个组件
@Component({
  selector: 'app-myc01',  //标签名
  template: '<h1>我的组件01</h1>   <app-myc02></app-myc02>'  //组件模板
})
export class MyComponent01 {

}


// function add(n1:number, n2:Object){
//   var sum: string = n1 + n2;
// }