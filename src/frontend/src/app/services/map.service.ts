import Map from '@arcgis/core/Map';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MapService {
  myMap = new Map({ basemap: 'streets-navigation-vector' });
}
