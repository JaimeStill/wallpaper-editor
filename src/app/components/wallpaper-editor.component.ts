import {
  Component,
  Input,
} from '@angular/core';

import { Wallpaper } from '../models';

@Component({
  selector: 'wallpaper-editor',
  templateUrl: 'wallpaper-editor.component.html'
})
export class WallpaperEditorComponent {

  alignments = [
    'start start',
    'start center',
    'start end',
    'center start',
    'center center',
    'center end',
    'end start',
    'end center',
    'end end'
  ];

  backdropTip =
`
backdrop-filter: grayscale(1);
backdrop-filter: brightness(1.5);
backdrop-filter: blur(5px);
backdrop-filter: contrast(0.8);
backdrop-filter: invert(0.7);
backdrop-filter: opacity(0.4);
backdrop-filter: sepia(0.4);
backdrop-filter: saturate(1.8);
backdrop-filter: hue-rotate(120deg);
`;

  filterTip =
`
filter: grayscale(0.2);
filter: sepia(0.8);
filter: saturate(2);
filter: hue-rotate(180deg);
filter: invert(1);
filter: opacity(0.5);
filter: brightness(0.5);
filter: contrast(4);
filter: blur(5px);
filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
filter: drop-shadow(4px 4px red);
`;

  borderTip =
`
border: {border-width} {border-style} {color};

border-style:
* solid
* none
* hidden
* dashed
* dotted
* double
* groove
* ridge
* inset
* outset
`;


  @Input() wallpaper!: Wallpaper;
  @Input() editorStyle: string = 'p8 scroll-container';
}
