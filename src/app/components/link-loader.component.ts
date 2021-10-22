import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';

import { Subscription } from 'rxjs';
import { CoreService } from '../services';

@Component({
  selector: 'link-loader',
  templateUrl: 'link-loader.component.html'
})
export class LinkLoaderComponent implements AfterViewInit, OnDestroy {
  private sub!: Subscription;

  valid: boolean = false;
  dirty: boolean = false;
  error?: string;
  url!: string;

  @Input() extensions: string[] = ['.jpg', '.png'];
  @Input() gap: string = '16px';
  @Input() buttonStyle = 'color-primary';
  @Input() label = 'Load Link';

  @Output() loaded = new EventEmitter<File>();
  @ViewChild('linkInput') linkInput!: ElementRef;

  private getExtension = (data: string) => `.${data?.split('.')?.pop()}`;

  private getFilename = (ext: string): string => {
    const check = this.url.split('/')?.pop();

    return check
      ? check
      : `image${ext}`;
  }

  private isValid = (ext: string) => this.extensions.includes(ext);

  constructor(
    private core: CoreService
  ) { }

  ngAfterViewInit() {
    this.sub = this.core.generateInputObservable(this.linkInput)
      .subscribe(
        (data: string) => {
          const ext = this.getExtension(data);

          this.valid = ext
            ? this.isValid(ext)
            : false;

          this.dirty = true;

          this.url = data;
        }
      );
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  load = async () => {
    if (this.valid && this.dirty) {
      try {
        const response = await fetch(this.url);

        if (response.ok) {
          this.error = undefined;

          const data = await response.blob();
          const metadata = {
            type: this.url.endsWith('.jpg')
              ? 'image/jpeg'
              : 'image/png'
          }

          const ext = this.getExtension(this.url);
          const name = this.getFilename(ext);

          const file = new File([data], name, metadata);

          this.loaded.emit(file);
          this.dirty = false;
        } else {
          console.error(response);
          this.error = response.statusText;
        }
      } catch (err) {
        this.error = `Unable to fetch ${this.url}`;
        console.error(err);
      }
    }
  }
}
