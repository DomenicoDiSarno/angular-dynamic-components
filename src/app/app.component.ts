import {Component, OnInit} from '@angular/core';
import {AdItem} from './ad-item';
import {AdService} from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  singleAd: AdItem;
  name = 'domenico';

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.loadSingleAd(this.name);
  }

  onClick(value: string) {
    this.loadSingleAd(value);
  }

  loadSingleAd(name) {
    this.singleAd = this.adService.loadComponent(name);
  }
}
