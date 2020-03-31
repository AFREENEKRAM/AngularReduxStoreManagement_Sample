import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { CommonAction } from '../appstore/common/common.action';
import { ViewDetailComponent } from '../view-detail/view-detail.component';
import { HostDirective } from '../host.directive';



@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
})
export class MycomponentComponent implements OnInit {
  gridDataSource;
  formData: '';
  mobileBasicData = [

    {"name":"Samsung Galaxy S20",
    "company":"Samsung",
    "price":"Rs. 164,999"},

    {"name":"Oppo Reno 3 Pro",
    "company":"Oppo",
    "price":"Rs. 69,999"},

    {"name":"Huawei Y9s 2019",
    "company":"Huawei",
    "price":"Rs. 40,999"}   
];
  @ViewChild(HostDirective,{ static: false }) lookupHost: HostDirective;
  @select(['CommonStore', 'dataFromMyCompo']) dataFromMyCompo$;


  constructor(
    public store: NgRedux<any>,
    public commonAction : CommonAction,
    public componentFactoryResolver: ComponentFactoryResolver
  ) { 

    this.dataFromMyCompo$.subscribe(data =>{
      this.formData = data;
      console.log("formdata",this.formData )
    })

   
  }

  ngOnInit() {
    this.gridDataSource = this.mobileBasicData;

  }

  loadDetail = (e) => {
    console.log(e.row.data);
    this.store.dispatch<any> (this.commonAction.dataFromMyCompo(e.row.data));
  }

  viewDetail () {
 
    const componentObject = ViewDetailComponent;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentObject
    );
  
    const viewContainerRef = this.lookupHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  };

 

}
