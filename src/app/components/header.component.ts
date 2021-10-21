import {
  Component,
  Input
} from '@angular/core';

import { ThemeService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Input() alignment: string = 'space-between center';
  @Input() containerStyle: string = 'p8';
  @Input() headerStyle: string = 'm4 mat-title';
  @Input() heading = 'Heading';
  @Input() lightIcon = 'brightness_5';
  @Input() lightIconColor = 'color-amber';
  @Input() darkIcon = 'brightness_3';
  @Input() darkIconColor = 'color-text';

  constructor(
    public themer: ThemeService
  ) { }
}
