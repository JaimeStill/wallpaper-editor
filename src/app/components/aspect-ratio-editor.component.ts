import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { Subscription } from 'rxjs';
import { AspectRatio } from '../models';
import { CoreService } from '../services';

@Component({
  selector: 'aspect-ratio-editor',
  templateUrl: 'aspect-ratio-editor.component.html'
})
export class AspectRatioEditorComponent implements AfterViewInit, OnDestroy {
  private subs: Subscription[] = [];

  ar!: AspectRatio;
  w!: number;
  h!: number;

  @Input() set data(data: AspectRatio) {
    if (data) {
      this.ar = data;
      this.update();
    }
  }

  @Input() gap: string = '12px';
  @Input() lockIcon: string = 'lock';
  @Input() unlockIcon: string = 'lock_open';
  @Input() lockStyle: string = 'material-icons-outlined';
  @Input() unlockStyle: string = 'material-icons-outlined';

  @ViewChild('width') width!: ElementRef;
  @ViewChild('height') height!: ElementRef;

  constructor(
    private core: CoreService
  ) { }

  private update = () => {
    this.w = this.ar.width;
    this.h = this.ar.height;
  }

  ngAfterViewInit() {
    this.update();

    this.subs.push(
      this.core.generateInputObservable(this.width)
        .subscribe(
          (data: string) => {
            if (Number.isInteger(+data)) {
              this.ar.setWidth(+data);
              this.update();
            }
          }
        ),
      this.core.generateInputObservable(this.height)
        .subscribe(
          (data: string) => {
            if (Number.isInteger(+data)) {
              this.ar.setHeight(+data);
              this.update();
            }
          }
        )
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  updateLock = (locked: boolean) => this.ar.locked = locked;

  reset = () => {
    this.ar.reset();
    this.update();
  }
}
