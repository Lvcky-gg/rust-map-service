import { Component, signal } from '@angular/core';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import '@arcgis/core/assets/esri/themes/dark/main.css';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  myMap = signal(new Map({ basemap: 'streets-navigation-vector' }));
  sceneView = signal({});

  ngAfterViewInit() {
    this.sceneView = signal(
      new SceneView({
        container: 'mapDiv',
        map: this.myMap(),
      })
    );
  }
}
