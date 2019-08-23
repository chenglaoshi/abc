import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc11',
  templateUrl: './myc11.component.html',
  styleUrls: ['./myc11.component.css']
})
export class Myc11Component {
  count = 1

  desc(){
    if(this.count>1){
      this.count--;
    }
  }

  inc(){
    if(this.count<9){
      this.count++;
    }
  }

}
