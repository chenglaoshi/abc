import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc10',
  templateUrl: './myc10.component.html',
  styleUrls: ['./myc10.component.css']
})
export class Myc10Component {
  //在此处声明Model数据
  userName = 'dingding'
  userAge = 20

  imgTitle = '这里是一副唯美的风景画'
  imgSrc = '../../assets/pic.jpg'

  doClick(){
    console.log('hello: ' + this.userName);
  }
}
