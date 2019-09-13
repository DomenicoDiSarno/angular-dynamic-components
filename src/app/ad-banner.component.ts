import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdItem} from './ad-item';
import {AdDirective} from './ad.directive';
import {AdComponent} from './ad.component';

@Component({
  selector: 'app-ad-banner',
  template: `<div class="ad-banner-example">
    <h3>Advertisements</h3>
    <ng-template ad-host></ng-template>
  </div>`
})
export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  currentAdIndex = -1;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  loadComponent() {
    const adItem = this.ads;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const containerRef = this.adHost.viewContainerRef;
    containerRef.clear();

    const componentRef = containerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 100);
  }
}
