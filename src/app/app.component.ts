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
  wallpaper: Wallpaper = new Wallpaper(2560, 1440, 1200, 1200);

  constructor(
    public themer: ThemeService
  ) { }

  ngOnInit() {
    this.output.push('Testing Wallpaper Class');

    this.output.push(`Wallpaper - Initial: ${this.wallpaper.render()}`);
    this.wallpaper.setContainerWidth(3440);
    this.output.push(`Wallpaper - Container Width Updated - Default (Unlocked): ${this.wallpaper.render()}`);
    this.wallpaper.setImageWidth(1000);
    this.output.push(`Wallpaper - Image Width Updated: ${this.wallpaper.render()}`);
    this.wallpaper.setContainerHeight(1080, true);
    this.output.push(`Wallpaper - Container Height Updated - Locked: ${this.wallpaper.render()}`);
    this.wallpaper.reset();
    this.output.push(`Wallpaper - Reset: ${this.wallpaper.render()}`);
  }
}
