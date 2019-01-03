import {Injectable} from '@angular/core';
import {AdItem} from './ad-item';
import {HeroProfileComponent} from './hero-profile.component';
import {HeroJobAdComponent} from './hero-job-ad.component';
import {DataService} from './data.service';

@Injectable()
export class AdService {
  public components = {
    domenico: HeroProfileComponent,
    drIQ: HeroProfileComponent,
    hiring: HeroJobAdComponent,
    apply: HeroJobAdComponent
  };

  constructor(protected dataService: DataService) {}

  loadComponent(name: string) {
    return new AdItem(this.getComponent(name), this.getDataByName(name));
  }

  getDataByName(name: string) {
    return this.dataService.getDataByName(name);
  }

  getComponent(name: string) {
    return this.components[name];
  }
}
