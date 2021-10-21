import {
  Component,
  OnInit
} from '@angular/core';

import { AspectRatio } from './models';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  monospace = 'Consolas, Liberation Mono, Monaco, Lucida Console, monospace';
  output: string[] = [];
  lockedAr: AspectRatio = new AspectRatio(3440, 1440, true);
  unlockedAr: AspectRatio = new AspectRatio(2560, 1440, false);

  constructor(
    public themer: ThemeService
  ) { }

  ngOnInit() {
    this.output.push(`Locked Aspect Ratio - Initial: ${this.lockedAr.render()}`);
    this.lockedAr.setWidth(4320);
    this.output.push(`Locked Aspect Ratio - Adjusted Width: ${this.lockedAr.render()}`);
    this.lockedAr.setHeight(1080);
    this.output.push(`Locked Aspect Ratio - Adjust Height: ${this.lockedAr.render()}`);
    this.lockedAr.reset();
    this.output.push(`Locked Aspect Ratio - Reset: ${this.lockedAr.render()}`);

    this.output.push(`Unlocked Aspect Ratio - Initial: ${this.unlockedAr.render()}`);
    this.unlockedAr.setWidth(3840);
    this.output.push(`Unlocked Aspect Ratio - Adjusted Width: ${this.unlockedAr.render()}`);
    this.unlockedAr.setHeight(2160);
    this.output.push(`Unlocked Aspect Ratio - Adjusted Height: ${this.unlockedAr.render()}`);
    this.unlockedAr.reset();
    this.output.push(`Unlocked Aspect Ratio - Reset: ${this.unlockedAr.render()}`);
  }
}
