import {
  Component,
  Input
} from '@angular/core';

import {
  Preview,
  Wallpaper
} from '../models';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'editor-preview',
  templateUrl: 'editor-preview.component.html'
})
export class EditorPreviewComponent {
  @Input() preview!: Preview;
  @Input() wallpaper!: Wallpaper;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  get backdropStyle() {
    return this.sanitizer.bypassSecurityTrustStyle(`
      backdrop-filter: ${this.wallpaper?.containerFilter};
      -webkit-backdrop-filter: ${this.wallpaper.containerFilter};
    `)
  }
}
