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
 
 
  @ViewChild(HostDirective,{ static: false }) lookupHost: HostDirective

  @select(['CommonStore', 'detailData']) hello$;
 // lookupComponents: ComponentItem[];

  constructor(
    public store: NgRedux<any>,
    public commonAction : CommonAction,
    public componentFactoryResolver: ComponentFactoryResolver
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

  viewDetail () {
 
    const componentObject = ViewDetailComponent;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentObject
    );
   // console.log('testttt=>>', this.lookupHost);
    const viewContainerRef = this.lookupHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  };
}
