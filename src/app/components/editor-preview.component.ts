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
}
