import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;
  constructor() { }

  ngOnInit() {
    this.setupMap();
  }

  public async setupMap() {
    const [MapView, EsriMap] = await loadModules(['esri/views/MapView', 'esri/Map'], {css: true});
    const map = new EsriMap({
      basemap: 'streets',
     
    });
    const mapView = new MapView({
      map: map,
      container: this.mapViewEl.nativeElement,
      center: [0.1278, 51.5074],
          zoom: 10,
    });
    console.log(mapView)
  }

}
