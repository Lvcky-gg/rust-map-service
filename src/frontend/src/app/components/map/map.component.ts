import { Component, signal, inject } from '@angular/core';
import { MapService } from '../../services/map.service';
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
  myMap = signal(inject(MapService).myMap);
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
