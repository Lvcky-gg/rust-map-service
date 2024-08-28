import { Component, afterRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
  myMap = null;
  sceneView = null;
  afterRender() {
    this.myMap = new Map({
      basemap: 'streets',
    });
    this.sceneView = new SceneView({
      map: this.myMap,
      container: 'mapDiv',
    });
  }
}
