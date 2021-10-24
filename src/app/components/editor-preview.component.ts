import {
  Component,
  Input
} from '@angular/core';

import {
  Preview,
  Wallpaper
} from '../models';

@Component({
  selector: 'editor-preview',
  templateUrl: 'editor-preview.component.html'
})
export class EditorPreviewComponent {
  @Input() preview!: Preview;
  @Input() wallpaper!: Wallpaper;
  @Input() minWidth: number = 420;

  getUrl = () => this.wallpaper?.backgroundSelect === null
    ? null
    : this.wallpaper?.backgroundSelect === false
      ? `url(${this.wallpaper?.src})`
      : `url(${this.wallpaper?.containerImage})`;
}
