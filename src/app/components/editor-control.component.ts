import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Subscription } from 'rxjs';
import { ResizeService } from '../services';

@Component({
  selector: 'editor-control',
  templateUrl: 'editor-control.component.html'
})
export class EditorControlComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  controlWidth!: number | string;

  @Input() controlStyle: string = 'm4 background-card rounded';
  @Input() minWidth: number | string = 420;
  @Input() labelStyle: string = 'mat-subheading-1';
  @Input() label: string = 'Label';

  constructor(
    private resizeSvc: ResizeService
  ) { }

  calcWidth = (width: number) =>
    this.controlWidth = typeof(this.minWidth) === 'number'
      ? this.minWidth >= width - 36
        ? width - 36
        : this.minWidth
      : this.minWidth ;

  ngOnInit() {
    this.calcWidth(window.innerWidth);

    this.sub = this.resizeSvc.size$.subscribe(size => {
      if (size) this.calcWidth(size.width);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
