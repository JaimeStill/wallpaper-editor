import {
  Component,
  OnInit
} from '@angular/core';

import { Wallpaper } from './models';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  monospace = 'Consolas, Liberation Mono, Monaco, Lucida Console, monospace';
  output: string[] = [];
  wallpaper!: Wallpaper;

  constructor(
    public themer: ThemeService
  ) { }

  ngOnInit() { }

  load = (file: File) => {
    if (file) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        this.wallpaper = new Wallpaper(img.src, file, img.width, img.height, file.name?.split('.')[0]);
      }
    }
  }
}
