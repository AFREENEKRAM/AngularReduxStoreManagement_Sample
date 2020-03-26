import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { CommonAction } from '../common/common.action';


@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
 
 
  @select(['CommonStore', 'detailData']) hello$;

  constructor(
    public store: NgRedux<any>,
    public commonAction : CommonAction
  ) { 


    this.hello$.subscribe(data => {
      console.log('my name is', data);
    })
  }

  ngOnInit() {
    this.store.dispatch<any> (this.commonAction.getDetail());

    this.hello$.subscribe(data => {
      console.log('my name is', data);
    })
  }

}
