import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'editor-control',
  templateUrl: 'editor-control.component.html'
})
export class EditorControlComponent {
  @Input() controlStyle: string = 'p8 m4 background-card rounded';
  @Input() minWidth: number | string = 420;
  @Input() labelStyle: string = 'mat-subheading-1';
  @Input() label: string = 'Label';
}
