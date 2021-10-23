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
  @Input() heading: string = 'Heading';
  @Input() lightIcon: string = 'brightness_5';
  @Input() lightIconColor: string = 'color-amber';
  @Input() darkIcon: string = 'brightness_3';
  @Input() darkIconColor: string = 'color-text';
  @Input() loading: boolean = false;

  constructor(
    public themer: ThemeService
  ) { }
}
