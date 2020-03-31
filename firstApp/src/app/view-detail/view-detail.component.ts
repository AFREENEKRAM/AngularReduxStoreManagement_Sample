import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { CommonAction } from '../appstore/common/common.action';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss']
})
export class ViewDetailComponent implements OnInit {
  viewDetailVisible: any;
  formData: any;
  @select(['CommonStore', 'isShowLookup']) isShowLookup$;
  @select(['CommonStore', 'dataFromMyCompo']) dataFromMyCompo$;

  constructor(
    public store: NgRedux<any>,
    public commonAction : CommonAction
  ) {
    
    console.log("ViewDetailComponent constructor")
    this.isShowLookup$.subscribe(data =>{
      this.viewDetailVisible = data;
    });

    this.dataFromMyCompo$.subscribe(data =>{
      this.formData = data;
      console.log("formdata",this.formData )
    })

   }

  ngOnInit() {
    console.log("ViewDetailComponent ngonit");
    this.store.dispatch<any> (this.commonAction.showLookup());
  }

  closePopup(){
    this.store.dispatch<any> (this.commonAction.hideLookup());
  }
}
