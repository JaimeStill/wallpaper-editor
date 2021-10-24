import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: 'info.component.html'
})
export class InfoComponent {
  @Input() tip!: string;
  @Input() infoStyle: string = 'color-primary';
  @Input() icon: string = 'help_outline';
}
